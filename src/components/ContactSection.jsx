import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const ContactSection = () => {
  const navigate = useNavigate()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const formRef = useRef(null)
  const startedAtRef = useRef(Date.now())

  const [status, setStatus] = useState({ state: 'idle', message: '' }) // idle | sending | success | error
  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '', // honeypot (should stay empty)
  })

  const isSending = status.state === 'sending'

  const onChange = (e) => {
    // basic “time-on-page” bot signal
    if (!startedAtRef.current) startedAtRef.current = Date.now()
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (isSending) return

    // Simple bot trap
    if (values.company.trim()) {
      setStatus({ state: 'success', message: 'Message sent.' })
      return
    }

    const email = values.email.trim()
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254
    if (!emailOk) {
      setStatus({ state: 'error', message: 'Please enter a valid email address.' })
      return
    }

    if (values.subject.trim().length < 3) {
      setStatus({ state: 'error', message: 'Please add a subject.' })
      return
    }

    if (values.message.trim().length < 10) {
      setStatus({ state: 'error', message: 'Please write a slightly longer message.' })
      return
    }

    const elapsedMs = Date.now() - (startedAtRef.current || Date.now())
    if (elapsedMs < 1500) {
      // Too fast to be human — treat as success to avoid tipping off bots
      setStatus({ state: 'success', message: 'Thanks — your message has been sent.' })
      setTimeout(() => navigate('/'), 600)
      return
    }

    setStatus({ state: 'sending', message: 'Sending…' })

    try {
      const res = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name,
          email,
          subject: values.subject,
          message: values.message,
          company: values.company,
          elapsedMs,
        }),
      })

      let data = null
      try {
        data = await res.json()
      } catch {
        // ignore (non-JSON response)
      }

      if (!res.ok || (data && data.ok === false)) {
        const serverError =
          (data && (data.error || data.message)) ||
          (res.status === 404
            ? 'Contact service not found (404). Make sure Netlify Functions are deployed.'
            : `Send failed (HTTP ${res.status}).`)
        throw new Error(serverError)
      }

      setStatus({ state: 'success', message: 'Thanks — your message has been sent.' })
      setValues({ name: '', email: '', subject: '', message: '', company: '' })
      formRef.current?.reset?.()
      startedAtRef.current = Date.now()
      setTimeout(() => navigate('/'), 900)
    } catch (err) {
      const message =
        err instanceof Error && err.message
          ? err.message
          : 'Something went wrong while sending. Please try again, or email us directly.'
      setStatus({
        state: 'error',
        message,
      })
    }
  }

  return (
    <section id="contact" ref={ref} className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden scroll-mt-24">
      {/* Subtle brand background (static) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-primary-200/25 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 h-96 w-96 rounded-full bg-accent-200/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 md:mb-14"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-6 py-2 bg-primary-700 rounded-full text-white font-semibold mb-4 border border-accent-400 shadow-sm"
          >
            <span className="text-gold-500 mr-2" aria-hidden="true">★</span>
            Contact
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-700">
            Get in touch
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-start">
            {/* Left: direct email card */}
            <div className="lg:col-span-5">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border border-primary-100">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-primary-700 rounded-2xl flex items-center justify-center shadow-lg border border-accent-400">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                </div>

                <p className="text-primary-700 text-center text-base md:text-lg leading-relaxed">
                  Email us at
                </p>

                <div className="mt-4 flex justify-center">
                  <a
                    href="mailto:globalvisionarymindsmain@gmail.com"
                    className="inline-flex items-center justify-center px-5 sm:px-6 py-3 rounded-full bg-primary-700 text-white font-semibold shadow-lg border border-accent-400 hover:ring-2 hover:ring-accent-400 transition break-all text-sm sm:text-base"
                  >
                    globalvisionarymindsmain@gmail.com
                  </a>
                </div>

                <p className="mt-6 text-primary-700/90 text-sm leading-relaxed text-center">
                  Or send us a message using the form.
                </p>
              </div>
            </div>

            {/* Right: send email form */}
            <div className="lg:col-span-7">
              <form
                ref={formRef}
                onSubmit={onSubmit}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border border-primary-100"
                aria-label="Contact form"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-800">
                    Send a message
                  </h3>
                  <span className="text-sm text-primary-700/80">
                    {isSending ? 'Sending…' : ''}
                  </span>
                </div>

                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <label>
                    Company
                    <input name="company" value={values.company} onChange={onChange} />
                  </label>
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-primary-800">
                      Name
                    </label>
                    <input
                      name="name"
                      required
                      onChange={onChange}
                      value={values.name}
                      className="mt-2 w-full rounded-2xl border border-primary-200 bg-white/70 px-4 py-3 text-primary-900 placeholder:text-primary-400 focus:outline-none focus:ring-2 focus:ring-accent-400"
                      placeholder="Your name"
                      autoComplete="name"
                      disabled={isSending}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary-800">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      onChange={onChange}
                      value={values.email}
                      className="mt-2 w-full rounded-2xl border border-primary-200 bg-white/70 px-4 py-3 text-primary-900 placeholder:text-primary-400 focus:outline-none focus:ring-2 focus:ring-accent-400"
                      placeholder="you@example.com"
                      autoComplete="email"
                      disabled={isSending}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-semibold text-primary-800">
                    Subject
                  </label>
                  <input
                    name="subject"
                    required
                    onChange={onChange}
                    value={values.subject}
                    className="mt-2 w-full rounded-2xl border border-primary-200 bg-white/70 px-4 py-3 text-primary-900 placeholder:text-primary-400 focus:outline-none focus:ring-2 focus:ring-accent-400"
                    placeholder="What is this about?"
                    disabled={isSending}
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-semibold text-primary-800">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    onChange={onChange}
                    value={values.message}
                    rows={6}
                    className="mt-2 w-full resize-y rounded-2xl border border-primary-200 bg-white/70 px-4 py-3 text-primary-900 placeholder:text-primary-400 focus:outline-none focus:ring-2 focus:ring-accent-400"
                    placeholder="Write your message…"
                    disabled={isSending}
                  />
                </div>

                <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary-700 text-white font-semibold shadow-lg border border-accent-400 hover:ring-2 hover:ring-accent-400 transition disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSending ? 'Sending…' : 'Send message'}
                  </button>

                  {status.state !== 'idle' && status.message ? (
                    <p
                      className={`text-sm ${
                        status.state === 'success' ? 'text-accent-600' : status.state === 'error' ? 'text-red-600' : 'text-primary-700'
                      }`}
                      role={status.state === 'error' ? 'alert' : 'status'}
                    >
                      {status.message}
                    </p>
                  ) : null}
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection

