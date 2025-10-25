import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 scroll-mt-24">
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

          {/* Right Content - Floating Media */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Mobile layout: 1 large image on top, 3 below */}
            <div className="sm:hidden w-full">
              <motion.img
                src="/images/1.jpeg"
                alt="Community impact collage"
                animate={{ y: [0, -8, 0], rotate: [0, 1.5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-64 object-cover rounded-2xl shadow-2xl border border-gold-300"
              />
              <div className="grid grid-cols-3 gap-2 mt-2">
                <motion.img
                  src="/images/2.jpeg"
                  alt="Community impact"
                  animate={{ y: [0, -6, 0], x: [0, 4, 0], rotate: [0, -1.5, 0] }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-24 object-cover rounded-xl shadow-xl border border-gold-300"
                />
                <motion.img
                  src="/images/3.jpeg"
                  alt="Community project"
                  animate={{ y: [0, -7, 0], rotate: [0, 1, 0] }}
                  transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-24 object-cover rounded-xl shadow-xl border border-gold-300"
                />
                <motion.img
                  src="/images/4.jpeg"
                  alt="Community outreach"
                  animate={{ y: [0, -5, 0], x: [0, -3, 0], rotate: [0, -1, 0] }}
                  transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-24 object-cover rounded-xl shadow-xl border border-gold-300"
                />
              </div>
            </div>

            {/* Tablet/Desktop layout: floating collage */}
            <div className="hidden sm:block relative h-96 md:h-[420px] lg:h-[500px]">
            {/* Floating Image */}
            <motion.img
              src="/images/1.jpeg"
              alt="Community impact collage"
              animate={{
                y: [0, -20, 0],
                x: [0, 12, 0],
                rotate: [0, 4, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 sm:w-72 md:w-80 h-auto rounded-3xl shadow-2xl border border-gold-300 z-10"
            />
            <motion.img
              src="/images/2.jpeg"
              alt="Community impact collage"
              animate={{
                y: [0, -16, 0],
                x: [0, 8, 0],
                rotate: [0, -3, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-10 left-8 w-40 sm:w-48 md:w-56 h-auto rounded-3xl shadow-2xl border border-gold-300 z-10"
            />
            <motion.img
              src="/images/3.jpeg"
              alt="Community project moment"
              animate={{
                y: [0, -18, 0],
                x: [0, -10, 0],
                rotate: [0, 3, 0],
              }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-10 left-24 w-48 sm:w-56 md:w-64 h-auto rounded-3xl shadow-2xl border border-gold-300 z-10"
            />
            <motion.img
              src="/images/4.jpeg"
              alt="Community outreach snapshot"
              animate={{
                y: [0, -14, 0],
                x: [0, 10, 0],
                rotate: [0, -2, 0],
              }}
              transition={{
                duration: 7.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-16 right-10 w-40 sm:w-48 md:w-52 h-auto rounded-3xl shadow-2xl border border-gold-300 z-10"
            />

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
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-primary-300/50 via-accent-300/50 to-gold-300/50 rounded-full blur-3xl -z-10"
            />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
    
    
    </section>
  )
}

export default Hero

