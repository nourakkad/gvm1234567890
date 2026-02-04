import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScsjtLBJnVdssc8u0iM8EuU37whlkK1NFbbRKuPaJ0fAEHFiA/viewform'

const EMBED_URL = `${FORM_URL}?embedded=true`

const SubmitProposal = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (!isFullscreen) return

    const prevOverflow = document.body.style.overflow
    const prevOverscroll = document.body.style.overscrollBehavior
    document.body.style.overflow = 'hidden'
    document.body.style.overscrollBehavior = 'none'

    return () => {
      document.body.style.overflow = prevOverflow
      document.body.style.overscrollBehavior = prevOverscroll
    }
  }, [isFullscreen])

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)')
    const sync = () => setIsMobile(mql.matches)
    sync()
    mql.addEventListener('change', sync)
    return () => mql.removeEventListener('change', sync)
  }, [])

  return (
    <section
      id="submit-a-proposal"
      ref={ref}
      className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden scroll-mt-24"
      aria-label="Submit an idea or proposal"
    >
      {/* Subtle brand background (static) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-primary-200/25 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 h-96 w-96 rounded-full bg-accent-200/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-6 py-2 bg-primary-700 rounded-full text-white font-semibold mb-4 border border-gold-300 shadow-sm"
          >
            <span className="text-gold-500 mr-2" aria-hidden="true">
              ★
            </span>
            Submit A Proposal
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-700">
            Submit an Idea or Proposal
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 md:gap-10 items-start">
          {/* Left: short intro + button */}
          <div className="lg:col-span-8">
            {isMobile ? (
              <button
                type="button"
                onClick={() => setIsFullscreen(true)}
                className="w-full text-left rounded-3xl bg-white shadow-2xl overflow-hidden ring-1 ring-gold-300"
                aria-label="Open the form full-screen"
              >
                <div className="relative">
                  {/* Non-interactive preview to avoid scroll fights on iOS */}
                  <iframe
                    title="Call For Ideas (Google Form) preview"
                    src={EMBED_URL}
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    scrolling="no"
                    className="pointer-events-none block w-full h-[520px]"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 flex items-end justify-center p-4 bg-gradient-to-t from-white/95 via-white/35 to-transparent">
                    <span className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary-700 text-white font-semibold shadow-lg border border-gold-300">
                      Tap to open and fill the form
                    </span>
                  </div>
                </div>
              </button>
            ) : (
              <div className="rounded-3xl bg-white shadow-2xl overflow-hidden ring-1 ring-gold-300">
                <iframe
                  title="Call For Ideas (Google Form)"
                  src={EMBED_URL}
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  scrolling="yes"
                  className="block w-full h-[520px] sm:h-[600px] md:h-[820px]"
                  style={{ touchAction: 'pan-y' }}
                  loading="lazy"
                  allow="clipboard-write; fullscreen"
                />
              </div>
            )}
          </div>
          
          {/* Right: embedded form */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-primary-100">
              <p className="text-primary-700 leading-relaxed">
                Use our Google Form to share your idea with Global Visionary Minds.
              </p>


              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary-700 text-white font-semibold shadow-lg border border-gold-300 hover:ring-2 hover:ring-gold-300 transition"
              >
                Open the form
                <ExternalLink className="w-5 h-5 text-gold-300" />
              </a>

              <p className="mt-4 text-sm text-primary-700">
                Tip: if scrolling inside the embedded form is difficult on mobile, use “Open form full-screen” or open it in a new tab.
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Full-screen embed (mobile helper) */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Google form (full screen)"
        >
          <div className="h-full w-full rounded-3xl bg-white overflow-hidden ring-1 ring-gold-300 shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-primary-100">
              <p className="font-semibold text-primary-800">Call For Ideas</p>
              <button
                type="button"
                onClick={() => setIsFullscreen(false)}
                className="px-4 py-2 rounded-full bg-primary-700 text-white font-semibold border border-gold-300"
              >
                Close
              </button>
            </div>

            <iframe
              title="Call For Ideas (Google Form) full screen"
              src={EMBED_URL}
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              scrolling="yes"
              className="block w-full flex-1"
              style={{ touchAction: 'pan-y' }}
              allow="clipboard-write; fullscreen"
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default SubmitProposal

