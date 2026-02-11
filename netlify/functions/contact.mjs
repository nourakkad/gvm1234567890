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

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return json(405, { ok: false, error: 'Method Not Allowed' })
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

  // Bot trap: pretend success
  if (company) return json(200, { ok: true })

  if (!name || !email || !subject || !message) {
    return json(400, { ok: false, error: 'Missing required fields' })
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

