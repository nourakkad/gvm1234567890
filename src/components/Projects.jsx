import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const areas = [
    {
      title: 'Urban food systems',
      body: 'such as aquaponics, hydroponics, vertical gardens, neighborhood greenhouses, and small-scale city farming that improve food access and nutrition.',
    },
    {
      title: 'Biogas and circular economy solutions',
      body: 'including initiatives that turn organic waste into energy, compost, or usable by-products for households, farms, or small businesses.',
    },
    {
      title: 'Safe, women-led community spaces',
      body: 'such as cafés, cooperatives, workshops, or shared workspaces that combine safety, income generation, and social connection.',
    },
    {
      title: 'Women-focused mobility and transport concepts',
      body: 'including women-only taxi services, safe ride initiatives, and community-designed transport solutions.',
    },
    {
      title: 'Youth innovation hubs and skills development spaces',
      body: 'offering training, mentorship, digital skills, vocational learning, and pathways to employment or entrepreneurship.',
    },
    {
      title: 'Cultural and heritage-based projects',
      body: 'including crafts, storytelling, archives, and creative industries that preserve local heritage while promoting inclusion, especially for persons with disabilities.',
    },
    {
      title: 'Rooftop gardens and community green spaces',
      body: 'transforming unused urban areas into places for food production, environmental learning, and collective well-being.',
    },
    {
      title: 'Simple and accessible technology',
      body: 'such as basic apps, digital tools, or low-tech systems that support learning, accountability, feedback, and community monitoring.',
    },
    {
      title: 'Community education initiatives',
      body: 'including informal learning spaces, after-school programs, and alternative education models rooted in local needs.',
    },
    {
      title: 'Livelihood and income-generating ideas',
      body: 'especially those led by women or youth and linked to local markets.',
    },
    {
      title: 'Environmental protection projects',
      body: 'such as water conservation, recycling, and nature-based solutions adapted to local contexts.',
    },
    {
      title: 'Community health and well-being initiatives',
      body: 'focused on mental health, psychosocial support, or access to basic services.',
    },
  ]

  return (
    <section id="impact" ref={ref} className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden scroll-mt-24">
      {/* Soft background */}
      <div className="absolute inset-0 bg-primary-50" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary-200/25 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-accent-200/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-6 py-2 bg-primary-700 rounded-full text-white font-semibold mb-4 border border-gold-300 shadow-sm"
          >
            <span className="text-gold-500 mr-2" aria-hidden="true">★</span>
            Impact Areas
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-700">
            Turning Ideas Into Action
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-700 max-w-3xl mx-auto">
            We are not currently implementing projects. The areas below reflect the types of ideas we are interested in supporting as we build our first portfolio. These examples are meant to inspire, not limit:
          </p>
        </motion.div>

        <div className="space-y-12 md:space-y-16">
          {/* Block 1 (matches screenshot positioning) */}
          <div className="grid lg:grid-cols-12 gap-8 md:gap-10 items-start">
            {/* Left: bullets then large image */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-primary-100">
                <ul className="list-disc pl-6 space-y-4 text-primary-800">
                  {areas.slice(0, 2).map((area) => (
                    <li key={area.title} className="marker:text-primary-700">
                      <span className="font-bold">{area.title}</span>, {area.body}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-2xl overflow-hidden border border-primary-100 shadow-lg">
                  <img
                    // TODO: replace with the approved “market/food systems” image
                    src="/images/lady-cafe.jpeg"
                    alt="Community and local livelihoods"
                    className="w-full h-56 sm:h-72 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right: small image then bullets */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-gold-300">
                <div className="rounded-2xl overflow-hidden border border-primary-100 shadow-lg mb-8">
                  <img
                    // TODO: replace with the approved “hydroponics/greenhouse” image
                    src="/images/aqua-farms.jpeg"
                    alt="Urban food systems"
                    className="w-full h-52 sm:h-64 object-cover"
                    loading="lazy"
                  />
                </div>

                <ul className="list-disc pl-6 space-y-4 text-primary-800">
                  {areas.slice(2, 4).map((area) => (
                    <li key={area.title} className="marker:text-primary-700">
                      <span className="font-bold">{area.title}</span>, {area.body}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Block 2 (blue band + image/bullets like screenshot) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="rounded-3xl overflow-hidden border border-primary-600/30 shadow-2xl"
          >
            <div className="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900">
              <div className="px-6 sm:px-8 md:px-10 py-10 md:py-12">
                <div className="grid lg:grid-cols-12 gap-8 md:gap-10 items-start">
                  {/* Left: bullets then large image */}
                  <div className="lg:col-span-7">
                    <div className="bg-white/10 backdrop-blur rounded-3xl p-6 md:p-8 border border-white/15">
                      <ul className="list-disc pl-6 space-y-4 text-white/95">
                        {areas.slice(4, 7).map((area) => (
                          <li key={area.title} className="marker:text-gold-300">
                            <span className="font-semibold text-white">{area.title}</span>, {area.body}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 rounded-2xl overflow-hidden border border-white/15 shadow-xl">
                      <img
                        // TODO: replace with the approved “technology/phone” image
                        src="/images/myvoice-app.jpeg"
                        alt="Simple and accessible technology"
                        className="w-full h-64 sm:h-80 object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Right: bullets then image */}
                  <div className="lg:col-span-5">
                    <div className="bg-white/10 backdrop-blur rounded-3xl p-6 md:p-8 border border-white/15">
                      <ul className="list-disc pl-6 space-y-4 text-white/95">
                        {areas.slice(7, 12).map((area) => (
                          <li key={area.title} className="marker:text-gold-300">
                            <span className="font-semibold text-white">{area.title}</span>, {area.body}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 rounded-2xl overflow-hidden border border-white/15 shadow-xl">
                      <img
                        // TODO: replace with the approved “crafts/soap” image
                        src="/images/iCultural.jpeg"
                        alt="Cultural and heritage-based projects"
                        className="w-full h-52 sm:h-64 object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <p className="text-white/90 max-w-2xl">
                    These are directions, not commitments. If your idea fits this spirit, even if it looks different, we want to hear from you.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Projects

