import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail } from 'lucide-react'

const GetInvolved = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
            className="inline-block px-6 py-2 bg-primary-700 rounded-full text-white font-semibold mb-4 border border-gold-300 shadow-sm"
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
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 md:p-12 shadow-2xl border border-primary-100">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-primary-700 rounded-2xl flex items-center justify-center shadow-lg border border-gold-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
            </div>

            <p className="text-primary-700 text-center text-base md:text-lg leading-relaxed">
              Email us at
            </p>

            <div className="mt-4 flex justify-center">
              <a
                href="mailto:globalvisionarymindsmain@gmail.com"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-3 rounded-full bg-primary-700 text-white font-semibold shadow-lg border border-gold-300 hover:ring-2 hover:ring-gold-300 transition break-all text-sm sm:text-base"
              >
                globalvisionarymindsmain@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GetInvolved

