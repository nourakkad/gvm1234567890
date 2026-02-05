import React from 'react'

const HomeHero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden scroll-mt-24 min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)]"
      aria-label="Home"
    >
      {/* Subtle brand background (static, not distracting) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-primary-200/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 h-96 w-96 rounded-full bg-accent-200/25 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        {/* Top row */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="space-y-7">


            <h1 className="text-primary-900 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Big change starts with small, brave steps.
            </h1>

            <div className="space-y-6 text-primary-800 text-base md:text-lg leading-relaxed max-w-prose">
              <p>
                Global Visionary Minds (GVM) is a young initiative born from a
                simple belief: meaningful change often begins quietly, with
                people who know their communities well and care deeply about
                them.
              </p>

              <p>
                We exist to support early-stage ideas that come from the ground
                up. Ideas that may still be taking shape. Ideas that may not yet
                have funding, a full plan, or the right connections, but have
                something essential: purpose.
              </p>

              <p>
                GVM operates from the Middle East and is registered in Lebanon.
                From here, we work with individuals, informal groups,
                grassroots organizations, and small NGOs who want to turn ideas
                into action in thoughtful, realistic ways.
              </p>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full max-w-md lg:max-w-none mx-auto rounded-3xl bg-white/60 backdrop-blur border border-gold-300 shadow-2xl overflow-hidden">
              <img
                // TODO: replace with the approved Section 1 right-side image file
                // Using an existing image so the page doesn't break.
                src="/images/home-values.jpeg"
                alt="GVM values"
                className="w-full aspect-[4/5] object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start mt-12 md:mt-16">
          <div className="w-full">
            <div className="rounded-3xl bg-white/60 backdrop-blur border border-gold-300 shadow-2xl overflow-hidden">
              <img
                // TODO: replace with the approved Section 1 bottom image file
                // Using an existing image so the page doesn't break.
                src="/images/home-city.jpeg"
                alt="City skyline at sunset"
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:pt-6">
            <div className="rounded-3xl bg-white/70 backdrop-blur border border-primary-100 shadow-xl p-6 md:p-8">
              <p className="text-primary-900 text-lg md:text-2xl leading-relaxed">
                We are at the beginning of our journey. We are listening, building,
                and opening space for ideas that deserve time and attention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero

