import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Users, Eye, Lightbulb } from 'lucide-react'

const Mission = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const cards = [
    {
      icon: Target,
      title: "Our Mission",
      description: "Support grassroots organizations and individuals with unique ideas in fighting inequality, protecting the planet, preserving culture to reimagining education. We help you tap into your potential with the resources, coaching, and platforms you need to make a lasting impact.",
      gradient: "bg-primary-600"
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "We dream of a world where people like you—those rooted in their communities—can lead with compassion, break barriers, and open doors for others. A world that's fairer, more creative, and full of opportunity.",
      gradient: "bg-accent-600"
    },
    {
      icon: Users,
      title: "Who We Are",
      description: "We're a small but mighty team based in Beirut, Lebanon, made up of passionate people from different walks of life. What brings us together? A shared belief in the power of grassroots innovation and a love for creative, courageous solutions that uplift communities.",
      gradient: "bg-gold-600"
    },
    {
      icon: Lightbulb,
      title: "Join Us In Impact",
      description: "We focus on small-scale funding, transparency, and collaboration, supporting initiatives like aqua farms and women-only taxis to create lasting, positive change in our community.",
      gradient: "bg-primary-600"
    }
  ]

  return (
    <section id="about" ref={ref} className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            <span className="text-gold-500 mr-2" aria-hidden="true">★</span>
            About Us
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-700">
            Empowering
            <br />
            Change
            <br />
            Through Community Initiatives
          </h2>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto">
            We're here for the doers—the confident ones who care deeply and act locally. 
            We've been in the field, we know the reality on the ground, and we're ready to help you plan a path forward.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300 rounded-3xl blur-xl"
                   style={{ background: `currentColor` }}
              />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-primary-100 hover:shadow-2xl transition-all duration-300">
                <div className="absolute -top-1 left-8 w-24 h-1 bg-gold-500 rounded-full" />
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 ${card.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <card.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4 text-primary-800">
                  <span className="border-b-4 border-gold-500 pb-1">{card.title}</span>
                </h3>
                <p className="text-primary-700 leading-relaxed">{card.description}</p>
                
                {/* Animated border */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute bottom-0 left-0 right-0 h-1 ${card.gradient} rounded-b-3xl origin-left`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Mission

