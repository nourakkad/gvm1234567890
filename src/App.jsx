import React, { useState, useEffect } from 'react'
import SiteNavbar from './components/SiteNavbar'
import HomeHero from './components/HomeHero'
import AboutUs from './components/AboutUs'
import OurApproach from './components/OurApproach'
import WhatWeSupport from './components/WhatWeSupport'
import ProposalForm from './components/ProposalForm'
import ContactSection from './components/ContactSection'
import SiteFooter from './components/SiteFooter'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteNavbar scrolled={scrolled} />
      <HomeHero />
      <AboutUs />     
      <WhatWeSupport />
      <OurApproach />     
      <ProposalForm />
      <ContactSection />
      <SiteFooter />
    </div>
  )
}

export default App

