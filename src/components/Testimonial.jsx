import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const Testimonial = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background waves */}
      <motion.div
        animate={{
          x: [0, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 left-0 w-full h-full opacity-10"
      >
        <svg className="w-full h-full" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,300 Q300,200 600,300 T1200,300 L1200,600 L0,600 Z" fill="url(#gradient1)" />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0e3ab9" />
              <stop offset="50%" stopColor="#15c969" />
              <stop offset="100%" stopColor="#f2b01e" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Large quote icon */}
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-8 -left-8 opacity-20"
          >
            <Quote className="w-32 h-32 text-primary-600" />
          </motion.div>

          <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-primary-100">
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ 
                    scale: 1.3,
                    rotate: 360,
                    transition: { duration: 0.5 }
                  }}
                >
                  <Star className="w-8 h-8 fill-gold-500 text-gold-500 mx-1" />
                </motion.div>
              ))}
            </div>

            {/* Testimonial text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl text-primary-800 text-center font-medium leading-relaxed mb-8 italic"
            >
              "Global Visionary Minds transformed our community with innovative projects. 
              Their dedication to grassroots change is inspiring, and the impact is truly 
              felt by everyone involved."
            </motion.p>

            {/* Author */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-center space-x-4"
            >
            <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                SM
              </div>
              <div>
                <p className="font-bold text-xl text-primary-800">Sarah M.</p>
                <p className="text-primary-700">Community Leader</p>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-200 rounded-full blur-2xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1.5,
              }}
            className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full blur-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonial

