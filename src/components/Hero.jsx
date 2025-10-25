import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Heart, Sparkles, Zap } from 'lucide-react'

const Hero = () => {
  const floatingIcons = [
    { Icon: Heart, delay: 0, duration: 3 },
    { Icon: Sparkles, delay: 0.5, duration: 4 },
    { Icon: Zap, delay: 1, duration: 3.5 },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements (kept subtle, no gradients) */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold border border-gold-300 shadow-sm">
                <span className="text-gold-500 mr-2" aria-hidden="true">★★★★★</span>
                <span className="align-middle">Rated 5 Stars by Supporters</span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
            >
              <span className="text-primary-700">Empowering</span>
              <br />
              <span className="text-primary-700">Change</span>
              <br />
              <span className="text-primary-700">Through Community</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base md:text-xl text-primary-700 leading-relaxed"
            >
              We don't just hand you the funds and walk away. We partner with you, 
              coach you, and walk the path together. From day one, we're in your corner—offering 
              support, practical advice, and room to grow. <span className="font-semibold text-gold-600">Think of us as your co-pilot.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-3 md:gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(14, 165, 233, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-8 md:py-4 bg-primary-700 text-white rounded-full font-semibold text-sm md:text-base flex items-center space-x-2 shadow-lg border border-gold-300 transition-all duration-300 hover:ring-2 hover:ring-gold-300"
              >
                <span>Reach Out</span>
                <ArrowRight className="w-5 h-5 text-gold-300" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-8 md:py-4 bg-white text-primary-700 rounded-full font-semibold text-sm md:text-base border border-gold-300 shadow-lg shadow-gold-300/50 hover:ring-2 hover:ring-gold-300 transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Floating Icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] hidden lg:block"
          >
            {floatingIcons.map(({ Icon, delay, duration }, index) => (
              <motion.div
                key={index}
                animate={{
                  y: [0, -30, 0],
                  x: [0, 20, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration,
                  delay,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute"
                style={{
                  top: `${index * 30}%`,
                  left: `${index * 25}%`,
                }}
              >
                <div className="w-32 h-32 bg-primary-500 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Icon className="w-16 h-16 text-white" />
                </div>
              </motion.div>
            ))}

            {/* Central Glow */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-primary-300/50 via-accent-300/50 to-gold-300/50 rounded-full blur-3xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-600 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1.5 h-1.5 bg-primary-600 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

