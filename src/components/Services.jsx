import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { DollarSign, Users, BookOpen, Handshake } from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: DollarSign,
      title: "Small-Scale Funding",
      description: "We give small but powerful boosts to people and projects with big heart. Financial support that makes a real difference.",
      color: "bg-primary-600",
      delay: 0
    },
    {
      icon: Users,
      title: "One-on-One Coaching",
      description: "Personal guidance from experienced mentors who understand your challenges and celebrate your wins.",
      color: "bg-accent-600",
      delay: 0.2
    },
    {
      icon: BookOpen,
      title: "Technical Guidance",
      description: "Expert advice and practical tools to help you navigate challenges and implement your vision effectively.",
      color: "bg-gold-600",
      delay: 0.4
    },
    {
      icon: Handshake,
      title: "Partnership Support",
      description: "We don't just provide financial support; we walk the journey with you every step of the way.",
      color: "bg-primary-600",
      delay: 0.6
    }
  ]

  return (
    <section id="our-work" ref={ref} className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 relative">
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
            Our Services
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-700">
            How We
            <br />
            Support
            <br />
            You
          </h2>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto">
            Whether you're a community leader, a grassroots group, or someone with an idea that can make a difference—we're here to help.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -90 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ delay: service.delay, duration: 0.6 }}
              whileHover={{ 
                y: -15,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative perspective-1000"
            >
              {/* Glow Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className={`absolute -inset-1 ${service.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              />
              
              <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-gold-100">
                {/* Icon Container */}
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -10, 10, -10, 0],
                  }}
                  transition={{ duration: 0.5 }}
                  className="mb-6"
                >
                  <div className={`w-20 h-20 ${service.color} rounded-2xl flex items-center justify-center shadow-lg mx-auto`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                </motion.div>

                <h3 className="text-xl font-bold mb-4 text-primary-800 text-center">
                  {service.title}
                </h3>
                <p className="text-primary-700 text-center leading-relaxed">
                  {service.description}
                </p>

                {/* Animated Corner Accent */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className={`absolute top-4 right-4 w-3 h-3 ${service.color} rounded-full`}
                />
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className={`absolute bottom-4 left-4 w-3 h-3 ${service.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

