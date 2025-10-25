import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Fish, Leaf, Car, Sprout } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      icon: Fish,
      title: "Aqua Farms",
      description: "Sustainable fish farming initiatives that provide food security and economic opportunities for local communities.",
      gradient: "bg-primary-600",
      image: "🐟"
    },
    {
      icon: Leaf,
      title: "Biogas Solutions",
      description: "Converting organic waste into clean energy, reducing environmental impact while creating sustainable power sources.",
      gradient: "bg-accent-600",
      image: "🌱"
    },
    {
      icon: Car,
      title: "Women-Only Taxis",
      description: "Safe, reliable transportation services operated by and for women, promoting safety and economic empowerment.",
      gradient: "bg-gold-600",
      image: "🚖"
    },
    {
      icon: Sprout,
      title: "Culture Preservation",
      description: "Protecting and celebrating local heritage through community-led initiatives that honor tradition while embracing innovation.",
      gradient: "bg-primary-600",
      image: "🎭"
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
                {/* Image Section with Emoji */}
                <div className={`relative h-48 ${project.gradient} flex items-center justify-center overflow-hidden`}>
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-8xl"
                  >
                    {project.image}
                  </motion.div>
                  
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
                  <p className="text-primary-700 leading-relaxed">{project.description}</p>
                  
                  {/* Progress indicator animation */}
                  <div className="mt-6">
                    <div className="flex justify-between text-sm text-primary-700 mb-2">
                      <span>Impact Level</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                      >
                        {85 + index * 5}%
                      </motion.span>
                    </div>
                    <div className="h-2 bg-primary-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${85 + index * 5}%` }}
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

