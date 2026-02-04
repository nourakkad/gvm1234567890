import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Our Work', href: '#our-work' },
    { label: 'Impact', href: '#impact' },
    { label: 'Contact', href: '#contact' },
    { label: 'Submit A Proposal', href: '#submit-a-proposal' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 select-none">
            <img
              src="/gvm.png"
              alt="Global Visionary Minds"
              className="w-14 h-14 md:w-16 md:h-16 object-contain shrink-0"
            />
            <span className="text-xl md:text-2xl font-bold text-primary-700">
              Global Visionary Minds
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, color: '#0ea5e9' }}
                className="text-primary-800 hover:text-primary-600 transition-colors font-medium relative group"
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-300 group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-primary-600 text-white"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu as popup card (no animations) */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 md:hidden"
          />

          {/* Centered Card */}
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed inset-0 md:hidden flex items-start justify-center pt-28 px-4"
          >
            <div className="w-full max-w-sm rounded-2xl shadow-2xl border border-primary-100 overflow-hidden">
              <div className="bg-gradient-to-br from-primary-50 via-accent-50 to-primary-50 backdrop-blur-xl">
                <div className="flex items-center justify-between px-5 py-4 border-b border-primary-100">
                  <span className="text-primary-800 font-semibold">Menu</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                    className="p-2 rounded-lg text-primary-700 hover:bg-primary-100"
                  >
                    <X />
                  </button>
                </div>
                <nav className="p-3">
                  <ul className="space-y-2">
                    {menuItems.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block w-full text-left px-5 py-4 rounded-xl bg-white/70 hover:bg-white text-primary-800 font-medium border border-primary-100"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </>
      )}
    </motion.nav>
  )
}

export default Navbar

