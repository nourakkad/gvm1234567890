import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const HowWeWork = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const bullets = [
    {
      lead: 'Clarifying the problem and the community need,',
      rest: 'making sure the idea responds to a real situation and is shaped by local voices',
    },
    {
      lead: 'Shaping a realistic plan and timeline,',
      rest: 'grounded in what is actually possible with the resources, people, and context available',
    },
    {
      lead: 'Identifying risks and constraints early,',
      rest: 'so challenges are acknowledged from the start and managed, not discovered too late.',
    },
    {
      lead: 'Defining what success would look like,',
      rest: 'in practical and measurable terms, agreed together from the beginning',
    },
    {
      lead: 'Supporting access to funding or partnerships,',
      rest: 'when possible, by helping refine proposals and connect ideas with the right opportunities.',
    },
  ]

  return (
    <section
      id="how-we-work"
      ref={ref}
      className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden scroll-mt-24"
      aria-label="How we work"
    >
      {/* Subtle brand background (static) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-primary-200/25 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 h-96 w-96 rounded-full bg-accent-200/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Top row: heading + intro + bullets */}
        <div className="grid lg:grid-cols-12 gap-8 md:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            
            <h2 className="text-4xl md:text-5xl font-bold text-primary-700 mb-5">
              How We Work
            </h2>

            <p className="text-primary-800 font-semibold mb-4">
              We see our role as a partner, not a distant funder.
            </p>
            <p className="text-primary-700 leading-relaxed">
              When we support an idea, we work step by step and stay closely involved. Our approach includes:
            </p>

            <ul className="mt-6 list-disc pl-6 space-y-3 text-primary-800">
              {bullets.map((b) => (
                <li key={b.lead} className="marker:text-primary-700">
                  <span className="font-bold">{b.lead}</span> {b.rest}
                </li>
              ))}
            </ul>
            
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="mt-8 sm:mt-10 lg:mt-20 rounded-3xl bg-white/80 backdrop-blur-sm border border-gold-300 shadow-2xl overflow-hidden">
              <img
                // TODO: replace with the approved image for this section
                src="/images/innovation-hub.jpeg"
                alt="How we work"
                className="w-full h-64 sm:h-80 lg:h-[320px] object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Empty space on the right (keeps the same “air” as the screenshot on desktop) */}
                    
        </div>

        {/* Bottom row: closing paragraph + image */}
        <div className="grid lg:grid-cols-12 gap-8 md:gap-10 items-start mt-10 md:mt-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="lg:col-span-7"
          >
            <p className="text-primary-700 leading-relaxed max-w-prose">
              Once funding is secured, our role doesn’t stop. We continue to provide follow-up and light-touch support, staying in contact as the idea moves into implementation, helping address challenges, reflect on progress, and adjust when needed.
            </p>
          </motion.div>

          
        </div>
      </div>
    </section>
  )
}

export default HowWeWork

