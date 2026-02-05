import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const SiteFooter = () => {
  const currentYear = new Date().getFullYear()

  const links = {
    'Quick Links': [
      { label: 'Home', to: '/' },
      { label: 'About Us', to: '/about' },
      { label: 'What We Support', to: '/what-we-support' },
      { label: 'Our Approach', to: '/our-approach' },
      { label: 'Submit a Proposal', to: '/submit-a-proposal' },
      { label: 'Contact', to: '/contact' },
    ],
    'Get Involved': [
      { label: 'Submit a Proposal', to: '/submit-a-proposal' },
      { label: 'Contact', to: '/contact' },
    ],
  }

  return (
    <footer className="relative bg-primary-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6 select-none">
              <img
                src="/gvm.png"
                alt="Global Visionary Minds"
                className="w-14 h-14 md:w-20 md:h-20 object-contain"
              />
              <span className="text-2xl font-bold">Global Visionary Minds</span>
            </div>
            
            <p className="text-primary-100 mb-6 leading-relaxed">
              Empowering change through community initiatives. We partner with grassroots 
              organizations to create lasting impact in Beirut and beyond.
            </p>

            <div className="space-y-3">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-primary-100"
              >
                <MapPin className="w-5 h-5 text-accent-400" />
                <span>Beirut, Lebanon</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-primary-100"
              >
                <Mail className="w-5 h-5 text-accent-400" />
                <a href="mailto:globalvisionarymindsmain@gmail.com" className="text-primary-100 hover:text-accent-400 transition-colors">
                  globalvisionarymindsmain@gmail.com
                </a>
              </motion.div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-lg font-bold mb-4 text-accent-400">{title}</h3>
              <ul className="space-y-3">
                {items.map((item, itemIndex) => (
                  <motion.li
                    key={item.to}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: itemIndex * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      to={item.to}
                      className="text-primary-100 hover:text-accent-400 transition-colors break-words"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="h-px bg-gold-500/50 mb-8"
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary-100 text-sm"
          >
            © {currentYear} Global Visionary Minds. All rights reserved.
          </motion.p>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            href="https://www.elyptek.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
              <img
              src="/ELYPTEK.png"
              alt="ELY PTEK"
              className="h-[50px] md:h-12 object-contain"
              />
          </motion.a>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 right-10 opacity-10"
      >
        <Sparkles className="w-16 h-16" />
      </motion.div>
    </footer>
  )
}

export default SiteFooter

