import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const WhatWeOffer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="what-we-offer"
      ref={ref}
      className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden scroll-mt-24"
      aria-label="What we offer"
    >
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-25">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgb(14 58 185 / 0.18) 1px, transparent 0)",
            backgroundSize: '44px 44px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
            {/* Left image (positioning like screenshot) */}
            <div className="md:col-span-4">
              <div className="mt-2 md:mt-14 rounded-3xl bg-white/80 backdrop-blur-sm border border-gold-300 shadow-2xl overflow-hidden">
                <img
                  src="/images/what-we-offer.png"
                  alt="What we offer"
                  className="w-full h-56 sm:h-64 md:h-[300px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right content */}
            <div className="md:col-span-8">
              <p className="text-4xl md:text-5xl font-bold text-primary-700">
                What We Offer
              </p>

              <div className="mt-4 bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl border border-primary-100">
                <p className="text-primary-700 leading-relaxed text-base md:text-lg">
                  GVM provides{' '}
                  <span className="font-bold text-primary-800">
                    micro-grants ranging from{' '}
                    <span className="text-gold-700">$1,000</span> to{' '}
                    <span className="text-gold-700">$10,000</span>
                  </span>{' '}
                  to support early-stage ideas once funding is available.
                </p>

                <p className="mt-5 text-primary-700 leading-relaxed text-base md:text-lg">
                  Alongside financial support, we offer practical guidance,
                  mentoring, and technical input when needed. Starting something
                  new can be overwhelming, and we aim to walk alongside people as
                  they take their first steps.
                </p>

                <p className="mt-5 text-primary-700 leading-relaxed text-base md:text-lg">
                  We open calls for ideas throughout the year. These calls are
                  invitations to share what you&apos;re working on, even if it&apos;s
                  still evolving.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatWeOffer

