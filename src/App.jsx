import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Services from './components/Services'
import Projects from './components/Projects'
import Testimonial from './components/Testimonial'
import Offer from './components/Offer'
import SubmitProposal from './components/SubmitProposal'
import DonorsPartners from './components/DonorsPartners'
import GetInvolved from './components/GetInvolved'
import Footer from './components/Footer'

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
      <Navbar scrolled={scrolled} />
      <Hero />
      <Mission />
      <Services />
      <Projects />
      <Testimonial />
      <Offer />      
      <SubmitProposal />
      <DonorsPartners />
      <GetInvolved />
      <Footer />
    </div>
  )
}

export default App

