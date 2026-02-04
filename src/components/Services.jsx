import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const points = [
    {
      title: 'We start early.',
      body: 'We work with ideas before they are polished or packaged, when guidance matters most.',
    },
    {
      title: 'We stay honest.',
      body: "We don’t claim impact before it exists. We build it step by step.",
    },
    {
      title: 'We stay close.',
      body: 'Decisions are shaped by local context, not distant assumptions.',
    },
    {
      title: 'We value transparency.',
      body: 'We are clear about what we fund, how decisions are made, and what we learn along the way.',
    },
  ]

  return (
    <section id="our-work" ref={ref} className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 relative scroll-mt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(14 165 233 / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-6 py-2 bg-primary-700 rounded-full text-white font-semibold mb-4 border border-gold-300 shadow-sm"
          >
            <span className="text-gold-500 mr-2" aria-hidden="true">★</span>
            Our Approach
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-700">
            What Makes Us Different
          </h2>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto">
            There are many organizations supporting social change. This is how we try to do things differently:
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start lg:items-stretch">
          {/* Points */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl border border-primary-100 h-full">
              <div className="absolute -top-1 left-8 w-24 h-1 bg-gold-500 rounded-full" />

              <ul className="space-y-6">
                {points.map((point) => (
                  <li key={point.title} className="flex gap-4">
                    <div className="mt-1 shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-accent-600" aria-hidden="true" />
                    </div>
                    <p className="text-primary-700 leading-relaxed text-base md:text-lg">
                      <span className="font-bold text-primary-800">{point.title}</span>{' '}
                      {point.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="h-full"
          >
            <div className="h-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gold-300 overflow-hidden">
              <img
                // TODO: replace with the approved image for this section
                src="/images/inclusive-employment.jpeg"
                alt="What makes us different"
                className="w-full h-64 sm:h-80 lg:h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services

