import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Fish, Leaf, Car, Sprout, Users, Lightbulb, Smartphone, Coffee } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [expanded, setExpanded] = useState({})

  const getImpactFromTitle = (title) => {
    let hash = 0
    for (let i = 0; i < title.length; i++) {
      hash = ((hash << 5) - hash) + title.charCodeAt(i)
      hash |= 0
    }
    return Math.abs(hash % 8) + 92
  }

  const projects = [
    {
      icon: Fish,
      title: "Aqua Farms",
      description: `Urban aquariums that grow fish and fresh produce — a sustainable way to feed cities while conserving resources.

Purpose
Integrating aquaculture and hydroponics to deliver fresh, local food with minimal land and water use.

Target Group
Urban households, communities, restaurants, schools, and planners.

Activities
Closed-loop fish and vegetable farming, training workshops, and pilot projects with local partners.

Outcomes & Impact
Fresh, pesticide-free food, reduced waste, up to 90% water savings, stronger food security, and lower carbon footprint.

Indicators
Annual harvest volumes, water savings, community participation, and reduced transport emissions.`,
      gradient: "bg-accent-600",
      image: "/images/aqua-farms.jpeg"
    },
    {
      icon: Leaf,
      title: "Biogas Solutions",
      description: `Transforming everyday organic waste into clean energy — bringing light, warmth, and dignity to rural communities.

Purpose
To provide affordable, renewable energy in villages while reducing dependence on firewood and fossil fuels.

Target Group
Rural households, farmers, and community institutions.

Activities
Installing biogas plants, training communities in waste-to-energy systems, and maintaining decentralized units.

Outcomes & Impact
Clean cooking fuel, reduced indoor pollution, lower deforestation, and improved quality of life through sustainable energy access.

Indicators
Number of biogas units installed, households served, energy generated, and reduction in firewood use and emissions.`,
      gradient: "bg-accent-600",
      image: "/images/biogas.jpeg"
    },
    {
      icon: Car,
      title: "Women-Only Taxis",
      description: `A transport service driven by women, for women — ensuring safe, reliable travel while creating jobs and independence for female drivers.

Purpose
To enhance women’s safety in urban transport while promoting economic empowerment and financial security for female drivers.

Target Group
Women commuters, working professionals, students, and families seeking trusted mobility options.

Activities
Recruiting and training women drivers, operating dedicated ride services, and partnering with local authorities and organizations.

Outcomes & Impact
Safe and reliable transport for women, new income opportunities for female drivers, greater confidence in city mobility, and stronger community trust.

Indicators
Number of women drivers employed, rides completed safely, passenger satisfaction, and income generated for drivers.`,
      gradient: "bg-primary-600",
      image: "/images/women-only-taxis.jpeg"
    },
    {
      icon: Users,
      title: "Inclusive Employment ",
      description: `Projects rooted in local culture that create meaningful jobs for people with disabilities while preserving heritage.

Purpose
To empower people with disabilities through dignified, skill-based employment that also sustains traditional crafts.

Target Group
Individuals with disabilities, artisan communities, and local cultural enterprises.

Activities
Training in heritage-based crafts, developing inclusive workplaces, and building market access for products.

Outcomes & Impact
Increased income and independence for people with disabilities, preservation of cultural skills, and stronger social inclusion.

Indicators
Number of people employed, crafts sustained, income generated, and participation in cultural projects.`,
      gradient: "bg-gold-600",
      image: "/images/inclusive-employment.jpeg"
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: `A vibrant learning space for young changemakers to develop skills, launch ideas, and shape a more inclusive future.

Purpose
To nurture creativity, leadership, and problem-solving among youth, equipping them to address social and environmental challenges.

Target Group
Students, young professionals, and early-stage entrepreneurs.

Activities
Workshops, mentorship programs, incubating start-ups, and hosting innovation challenges.

Outcomes & Impact
Stronger entrepreneurial skills, new community-driven solutions, and increased participation of youth in shaping sustainable futures.

Indicators
Number of participants engaged, ideas incubated, ventures launched, and partnerships created.`,
      gradient: "bg-primary-600",
      image: "/images/innovation-hub.jpeg"
    },
    {
      icon: Smartphone,
      title: "MyVoice App",
      description: `A simple yet powerful mobile tool helping grassroots leaders track impact, gather feedback, and share their stories with the world.

Purpose
To amplify grassroots voices by providing accessible digital tools for monitoring progress, documenting impact, and storytelling.

Target Group
Community leaders, local NGOs, and social entrepreneurs.

Activities
App-based data collection, impact dashboards, training in digital literacy, and sharing stories on wider platforms.

Outcomes & Impact
Improved transparency, stronger community engagement, and greater visibility for local change-makers.

Indicators
Active users onboarded, feedback collected, stories shared, and measurable impact tracked.`,
      gradient: "bg-primary-600",
      image: "/images/myvoice-app.jpeg"
    },
    {
      icon: Sprout,
      title: "Green Rooftops For All",
      description: `Turning underused rooftops into lush gardens — cleaning the air, growing food, and bringing communities closer.

Purpose
To transform idle urban spaces into productive green areas that improve air quality, support food security, and build community bonds.

Target Group
Urban households, residential societies, schools, and city planners.

Activities
Installing rooftop gardens, training residents in urban farming, and organizing community gardening programs.

Outcomes & Impact
Fresher air, local food production, cooler buildings, and stronger neighborhood connections.

Indicators
Number of rooftops converted, food grown, households engaged, and improvements in local air quality and temperature.`,
      gradient: "bg-accent-600",
      image: "/images/green-rooftops.jpeg"
    },
    {
      icon: Coffee,
      title: "Lady Cafe",
      description: `A welcoming café designed exclusively for women — a safe, supportive space to gather, work, and collaborate.

Purpose
To create a women-only hub that blends hospitality with empowerment, encouraging connection, creativity, and entrepreneurship.

Target Group
Women professionals, students, entrepreneurs, and community groups.

Activities
Running a café with co-working facilities, hosting networking sessions, skill-building workshops, and community events.

Outcomes & Impact
Stronger peer networks, new opportunities for collaboration, enhanced confidence, and a nurturing space for women’s ideas to grow.

Indicators
Footfall and membership, number of events hosted, collaborations initiated, and participant feedback.`,
      gradient: "bg-gold-600",
      image: "/images/lady-cafe.jpeg"
    }
  ]

  return (
    <section id="impact" ref={ref} className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-primary-50" />

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
            Community Projects
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-700">
            Transforming
            <br />
            Lives
            <br />
            In Beirut & Beyond
          </h2>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto">
            Explore our initiatives that are making real impact in communities across the region.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateX: -45 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Animated gradient border */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute -inset-1 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: 'currentColor' }}
              />

              <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl">
                {/* Image Section */}
                <div className={`relative h-64 md:h-72 lg:h-80 ${project.gradient} overflow-hidden`}>
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    initial={{ scale: 1.05 }}
                    animate={{ scale: [1.05, 1, 1.05] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />

                  {/* Floating particles */}
                  <motion.div
                    animate={{
                      y: [-20, -60],
                      opacity: [1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                    className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/50 rounded-full"
                  />
                  <motion.div
                    animate={{
                      y: [-20, -60],
                      opacity: [1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5,
                      repeatDelay: 1
                    }}
                    className="absolute top-1/3 right-1/4 w-2 h-2 bg-white/50 rounded-full"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-12 h-12 ${project.gradient} rounded-xl flex items-center justify-center mr-4 ring-4 ring-gold-300/40`}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-primary-800"><span className="border-b-4 border-gold-500 pb-1">{project.title}</span></h3>
                  </div>
                  <div className="relative">
                    <p className={`text-primary-700 leading-relaxed whitespace-pre-line ${expanded[index] ? '' : 'line-clamp-3'}`}>{project.description}</p>
                    {!expanded[index] && (
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent" />
                    )}
                  </div>
                  <button
                    onClick={() => setExpanded(prev => ({ ...prev, [index]: !prev[index] }))}
                    aria-expanded={!!expanded[index]}
                    className="mt-3 text-primary-700 font-semibold hover:text-accent-600"
                  >
                    {expanded[index] ? 'Read less' : 'Read more'}
                  </button>
                  
                  {/* Progress indicator animation */}
                  <div className="mt-6">
                    <div className="flex justify-between text-sm text-primary-700 mb-2">
                      <span>Impact Level</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                      >
                        {getImpactFromTitle(project.title)}%
                      </motion.span>
                    </div>
                    <div className="h-2 bg-primary-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${getImpactFromTitle(project.title)}%` }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className={`h-full ${project.gradient}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

