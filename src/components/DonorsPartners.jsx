import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const DonorsPartners = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="for-donors-and-partners"
      ref={ref}
      className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden scroll-mt-24"
      aria-label="For donors and partners"
    >
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-primary-200/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 h-96 w-96 rounded-full bg-accent-200/15 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
            {/* Left content */}
            <div className="md:col-span-6">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-700">
                For Donors and Partners
              </p>

              <div className="mt-4 bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl border border-primary-100">
                <p className="text-primary-700 leading-relaxed text-base md:text-lg">
                  We work with donors and partners who believe in local leadership
                  and realistic, long-term impact.
                </p>

                <p className="mt-5 text-primary-700 leading-relaxed text-base md:text-lg">
                  GVM supports early-stage, grassroots ideas that need trust,
                  flexibility, and time to grow. We are transparent about what we
                  fund, why we fund it, and how decisions are made.
                </p>

                <p className="mt-5 text-primary-700 leading-relaxed text-base md:text-lg">
                  As projects move forward, we share progress, challenges, and
                  lessons learned openly and responsibly. Our approach keeps
                  accountability clear and proportional, allowing local partners
                  to focus on what matters most: implementation and community
                  impact.
                </p>
              </div>
            </div>

            {/* Right image (positioning like screenshot) */}
            <div className="md:col-span-6">
              <div className="mt-6 md:mt-20 rounded-3xl bg-white/80 backdrop-blur-sm border border-gold-300 shadow-2xl overflow-hidden">
                <img
                  src="/images/donors-partners.png"
                  alt="For donors and partners"
                  className="w-full h-64 md:h-[320px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DonorsPartners

