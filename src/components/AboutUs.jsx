import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Target, Users, Eye, CheckCircle2 } from 'lucide-react'

const AboutUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedTeam, setExpandedTeam] = useState({})
  const [teamImageError, setTeamImageError] = useState({})

  const mission = (
    <div className="space-y-4">
      <p>
        Our mission is to support people with community-rooted ideas who want to
        address real challenges: inequality, environmental pressure, access to
        opportunity, inclusion, and dignity. We help shape ideas so they can
        grow into clear, fundable, and responsible initiatives.
      </p>
      <p>
        We don’t believe change has to be big to be meaningful. We believe
        it has to be honest, relevant, and grounded in the reality of the
        people it aims to serve.
      </p>
    </div>
  )

  const vision = (
    <p>
      We imagine a world where local leaders have a fair chance to build
      solutions for their own communities. A world where creativity, care, and
      responsibility matter more than visibility or scale.
    </p>
  )

  const whoWeAre = (
    <div className="space-y-4">
      <p>
        We are a small team with experience across humanitarian work, community
        projects, and program design. Our backgrounds are diverse, but what
        connects us is a shared respect for local knowledge and a desire to
        support ideas without reshaping them to fit distant expectations.
      </p>
      <p>We work closely with people, not templates.</p>
    </div>
  )

  const whatMakesUsDifferentPoints = [
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

  const teamMembers = [
    {
      name: 'Shqipe Malushi',
      role: 'Founder of Global Visionary Minds',
      initials: 'SM',
      photoSrc: '/images/shqipe.jpg',
      bio: `Shqipe Malushi is a poet, writer, performer, public speaker, gender adviser, and founder of Global Visionary Minds, dedicated to empowering communities through storytelling, leadership, and love. Originally from Kosovo, she transformed her journey as an immigrant into a global mission—working across Afghanistan, India, Lebanon, Iraq, Albania, and the U.S. to uplift women, inspire youth, and foster peace. Her work has earned her international recognition, including the Women of Excellence Award, the Iconic Women’s Leadership Award, and the NATO Peacekeeping Medal. Through her voice and vision, Shqipe continues to ignite hearts and awaken changemakers around the world.`,
      hasReadMore: true,
    },
    {
      name: 'Andrés González Rodríguez',
      role: 'Co-Founder / CEO of Global Visionary Minds',
      initials: 'AGR',
      photoSrc: '/images/andres.jpg',
      bio: `Andrés González Rodríguez is the Co-Founder and CEO of Global Visionary Minds, a seasoned humanitarian leader with almost three decades of experience directing international development and emergency operations across Syria, Iraq, Lebanon, Afghanistan, and beyond. As former Country Director for global NGOs including Oxfam, the Norwegian Refugee Council, and War Child Holland, he has mobilized over $160 million in funding and led transformative, cross-sector strategies that shifted the humanitarian field toward sustainable recovery. A visionary strategist, passionate advocate, and builder of global partnerships, Andrés is known for expanding programs, empowering local leadership, and fostering innovation for impact in the world’s most challenging environments.`,
      hasReadMore: true,
    },
    {
      name: 'Manal Eid',
      role: 'Vice President of the Board',
      initials: 'ME',
      photoSrc: '/images/manal.jpg',
      bio: `Manal Eid is a passionate child rights advocate with over 18 years of experience supporting children in Lebanon and conflict-affected areas of the MENA region. As Vice President of Global Visionary Minds and Director of Connect Children Now Lebanon, DCI International she leads transformative, community-based initiatives that protect children from violence, exploitation, and trauma. A founding member of War Child Holland in Lebanon, Manal is also the creator of Incredible Me, an innovative psychosocial support methodology that uses art and movement to help children heal. Her work centers on inclusion, resilience, and the power of child participation to shape peaceful, connected communities.`,
      hasReadMore: true,
    },
  ]

  return (
    <section id="about" ref={ref} className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden scroll-mt-24">
      {/* Background decoration */}
      <div className="absolute inset-0" />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-6 py-2 bg-primary-700 rounded-full text-white font-semibold mb-4 border border-gold-300 shadow-sm"
          >
            About Us
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-700">
            About Us
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Mission + Vision (same line on desktop) */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch justify-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="group relative"
            >
              <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-primary-100 hover:shadow-2xl transition-all duration-300">
                <div className="absolute -top-1 left-8 w-24 h-1 bg-gold-500 rounded-full" />
                <div className="flex items-center justify-center mb-6">
                  <div className="w-14 h-14 bg-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary-800 text-center">
                  <span className="border-b-4 border-gold-500 pb-1">Our Mission</span>
                </h3>
                <div className="text-primary-700 leading-relaxed">{mission}</div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary-600 rounded-b-3xl" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="group relative"
            >
              <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-primary-100 hover:shadow-2xl transition-all duration-300">
                <div className="absolute -top-1 left-8 w-24 h-1 bg-gold-500 rounded-full" />
                <div className="flex items-center justify-center mb-6">
                  <div className="w-14 h-14 bg-accent-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary-800 text-center">
                  <span className="border-b-4 border-gold-500 pb-1">Our Vision</span>
                </h3>
                <div className="text-primary-700 leading-relaxed">{vision}</div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent-600 rounded-b-3xl" />
              </div>
            </motion.div>
          </div>

          {/* Who We Are (under them, centered section) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-8 md:mt-10"
          >
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl border border-primary-100">
              <div className="absolute -top-1 left-8 w-24 h-1 bg-gold-500 rounded-full" />
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 bg-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Users className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary-800 text-center">
                <span className="border-b-4 border-gold-500 pb-1">Who We Are</span>
              </h3>
              <div className="text-primary-700 leading-relaxed max-w-3xl mx-auto">
                {whoWeAre}
              </div>

              <div className="mt-10">
                <h4 className="text-xl font-bold text-primary-800 text-center mb-6">
                  Our Team
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {teamMembers.map((member, idx) => (
                    <div
                      key={idx}
                      className="bg-white/70 backdrop-blur rounded-3xl border border-primary-100 shadow-lg overflow-hidden"
                    >
                      {/* Photo */}
                      <div className="relative w-full bg-gradient-to-br from-primary-600/20 via-accent-600/20 to-gold-500/20">
                        {member.photoSrc && !teamImageError[idx] ? (
                          <img
                            src={member.photoSrc}
                            alt={member.name}
                            className="w-full h-56 sm:h-64 lg:h-64 object-cover"
                            loading="lazy"
                            onError={() =>
                              setTeamImageError((prev) => ({ ...prev, [idx]: true }))
                            }
                          />
                        ) : (
                          <div className="w-full h-56 sm:h-64 lg:h-64 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary-600 via-accent-600 to-gold-500 flex items-center justify-center text-white font-bold text-xl shadow-md">
                              {member.initials}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Text */}
                      <div className="p-6">
                        <p className="font-bold text-primary-800 leading-tight text-lg">
                          {Array.isArray(member.nameLines) ? (
                            member.nameLines.map((line) => (
                              <span key={line} className="block">
                                {line}
                              </span>
                            ))
                          ) : (
                            member.name
                          )}
                        </p>
                        <p className="text-primary-700 text-sm mt-1">{member.role}</p>

                        <div className="mt-4">
                        <p
                          className={`text-primary-700 leading-relaxed text-sm ${
                            expandedTeam[idx] ? '' : 'line-clamp-3'
                          }`}
                        >
                          {member.bio}
                        </p>

                        {member.hasReadMore && (
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedTeam((prev) => ({
                                ...prev,
                                [idx]: !prev[idx],
                              }))
                            }
                            aria-expanded={Boolean(expandedTeam[idx])}
                            className="mt-3 inline-flex items-center text-sm font-semibold text-primary-700 hover:text-primary-800 underline underline-offset-4"
                          >
                            {expandedTeam[idx] ? 'Read less' : 'Read more'}
                          </button>
                        )}
                      </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* What Makes Us Different */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-10 md:mt-12"
          >
            <div className="grid lg:grid-cols-12 gap-8 md:gap-10 items-start">
              <div className="lg:col-span-7">
                <h3 className="text-3xl md:text-4xl font-bold text-primary-700">
                  What Makes Us Different
                </h3>
                <p className="mt-4 text-primary-700 leading-relaxed text-base md:text-lg">
                  There are many organizations supporting social change. This is how we try to do things differently:
                </p>

                <div className="mt-6 bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-primary-100">
                  <ul className="space-y-6">
                    {whatMakesUsDifferentPoints.map((point) => (
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
              </div>

              <div className="lg:col-span-5">
                <div className="mt-8 sm:mt-10 lg:mt-12 rounded-3xl bg-white/80 backdrop-blur-sm border border-gold-300 shadow-2xl overflow-hidden">
                  <img
                    // TODO: replace with the approved image for this section
                    src="/images/inclusive-employment.jpeg"
                    alt="What makes us different"
                    className="w-full h-64 sm:h-80 lg:h-[420px] object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs

