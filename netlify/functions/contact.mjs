import nodemailer from 'nodemailer'

function json(statusCode, data) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(data),
  }
}

function mapSmtpError(err) {
  const code = err?.code
  const responseCode = err?.responseCode

  if (code === 'EAUTH') return 'SMTP authentication failed. Check SMTP_USER/SMTP_PASS.'
  if (code === 'ESOCKET' || code === 'ECONNECTION')
    return 'Could not connect to SMTP server. Check SMTP_HOST/SMTP_PORT/SMTP_SECURE.'
  if (responseCode === 535) return 'SMTP authentication failed (535). Check credentials.'
  if (responseCode === 550) return 'SMTP rejected the message (550). Check FROM/TO addresses and provider rules.'

  return 'Failed to send email.'
}

function getHeader(headers, key) {
  if (!headers) return ''
  return String(headers[key] ?? headers[key.toLowerCase()] ?? '').trim()
}

function isValidEmail(email) {
  if (!email || email.length > 254) return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const RATE_WINDOW_MS = 60 * 60 * 1000
const rateMap = globalThis.__gvmContactRateMap || (globalThis.__gvmContactRateMap = new Map())

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return json(405, { ok: false, error: 'Method Not Allowed' })
  }

  // Optional origin allowlist (comma-separated)
  const allowedOrigins = String(process.env.ALLOWED_ORIGINS || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
  if (allowedOrigins.length) {
    const origin = getHeader(event.headers, 'origin')
    if (!origin || !allowedOrigins.includes(origin)) {
      return json(403, { ok: false, error: 'Forbidden origin' })
    }
  }

  // Basic per-IP rate limit (best-effort; serverless instances are ephemeral)
  const maxPerHour = Number(process.env.RATE_LIMIT_MAX_PER_HOUR || 10)
  if (maxPerHour > 0) {
    const ip =
      getHeader(event.headers, 'x-nf-client-connection-ip') ||
      getHeader(event.headers, 'x-forwarded-for').split(',')[0]?.trim() ||
      ''

    if (ip) {
      const now = Date.now()
      const arr = rateMap.get(ip) || []
      const recent = arr.filter((t) => now - t < RATE_WINDOW_MS)
      if (recent.length >= maxPerHour) {
        return json(429, { ok: false, error: 'Too many requests. Please try again later.' })
      }
      recent.push(now)
      rateMap.set(ip, recent)
    }
  }

  let payload
  try {
    payload = JSON.parse(event.body || '{}')
  } catch {
    return json(400, { ok: false, error: 'Invalid JSON' })
  }

  const name = String(payload.name || '').trim()
  const email = String(payload.email || '').trim()
  const subject = String(payload.subject || '').trim()
  const message = String(payload.message || '').trim()
  const company = String(payload.company || '').trim() // honeypot
  const elapsedMs = Number(payload.elapsedMs || 0)

  // Bot trap: pretend success
  if (company) return json(200, { ok: true })
  if (elapsedMs && elapsedMs < 1500) return json(200, { ok: true })

  if (!name || !email || !subject || !message) {
    return json(400, { ok: false, error: 'Missing required fields' })
  }

  if (name.length < 2 || name.length > 100) {
    return json(400, { ok: false, error: 'Invalid name' })
  }
  if (!isValidEmail(email)) {
    return json(400, { ok: false, error: 'Invalid email' })
  }
  if (subject.length < 3 || subject.length > 150 || /[\r\n]/.test(subject)) {
    return json(400, { ok: false, error: 'Invalid subject' })
  }
  if (message.length < 10 || message.length > 5000) {
    return json(400, { ok: false, error: 'Invalid message length' })
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO_EMAIL,
    CONTACT_FROM_EMAIL,
  } = process.env

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    return json(500, { ok: false, error: 'Email service not configured' })
  }

  const port = Number(SMTP_PORT)
  const secure = String(SMTP_SECURE || '').toLowerCase() === 'true'

  const transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    '',
    message,
  ].join('\n')

  try {
    await transport.sendMail({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `[GVM Contact] ${subject}`,
      text,
    })
  } catch (err) {
    return json(500, { ok: false, error: mapSmtpError(err) })
  }

  return json(200, { ok: true })
}

