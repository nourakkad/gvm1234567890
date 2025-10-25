import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Send, Heart, Users, Lightbulb, HandHeart } from 'lucide-react'

const GetInvolved = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState('')

  const ways = [
    {
      icon: Heart,
      title: "Donate",
      description: "Support our mission with a contribution that directly funds grassroots projects.",
      gradient: "bg-gold-600"
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Share your time and skills to help community initiatives thrive.",
      gradient: "bg-primary-600"
    },
    {
      icon: Lightbulb,
      title: "Share Your Idea",
      description: "Have a project in mind? We want to hear from you and help bring it to life.",
      gradient: "bg-accent-600"
    },
    {
      icon: HandHeart,
      title: "Become a Mentor",
      description: "Guide others with your experience and help build stronger communities.",
      gradient: "bg-primary-600"
    }
  ]

  return (
    <section id="donate" ref={ref} className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden scroll-mt-24">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl"
        />
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
            Get Involved
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-700">
            Join The
            <br />
            Movement
          </h2>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto">
            Want to do more than just watch change happen? Join us. Every small step counts.
          </p>
        </motion.div>

        {/* Ways to Get Involved */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ways.map((way, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-primary-100">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 ${way.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                >
                  <way.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-primary-800">{way.title}</h3>
                <p className="text-primary-700 text-sm leading-relaxed">{way.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-primary-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Animated circles */}
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"
            />
            
            <div className="relative">
              <div className="flex items-center justify-center mb-6">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Mail className="w-12 h-12 text-white" />
                </motion.div>
              </div>
              
              <h3 className="text-3xl font-bold text-white text-center mb-4">
                Join Our Community
              </h3>
              <p className="text-white/90 text-center mb-8">
                Stay updated on our projects, impact stories, and opportunities to get involved.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  className="flex-1 px-6 py-4 rounded-full focus:outline-none focus:ring-4 focus:ring-white/50 transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gold-500 text-white rounded-full font-bold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all"
                >
                  <span>Subscribe</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 space-y-4"
        >
          <h4 className="text-2xl font-bold text-primary-800">Connect With Us</h4>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-primary-700">
            <motion.a
              whileHover={{ scale: 1.1, color: '#0ea5e9' }}
              href="mailto:globalvisionarymindsmain@gmail.com"
              className="flex items-center space-x-2 justify-center"
            >
              <Mail className="w-5 h-5" />
              <span>globalvisionarymindsmain@gmail.com</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GetInvolved

