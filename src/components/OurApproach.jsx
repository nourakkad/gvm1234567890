import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const OurApproach = () => {
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
      id="our-approach"
      ref={ref}
      className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden scroll-mt-24"
      aria-label="Our approach"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(14 165 233 / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              className="inline-block px-6 py-2 bg-primary-700 rounded-full text-white font-semibold mb-4 border border-gold-300 shadow-sm"
            >
              <span className="text-gold-500 mr-2" aria-hidden="true">★</span>
              Our Approach
            </motion.span>

            <h2 className="text-4xl md:text-5xl font-bold text-primary-700 mb-5">
              Our Approach
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

            <p className="mt-8 text-primary-700 leading-relaxed max-w-prose">
              Once funding is secured, our role doesn’t stop. We continue to provide follow-up and light-touch support, staying in contact as the idea moves into implementation, helping address challenges, reflect on progress, and adjust when needed.
            </p>
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
        </div>

        {/* What We Offer */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-12 md:mt-16"
        >
          <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
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
                  invitations to share what you’re working on, even if it’s
                  still evolving.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* For Donors and Partners */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-12 md:mt-16"
        >
          <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
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

export default OurApproach

