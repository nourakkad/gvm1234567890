import React, { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import SiteNavbar from './components/SiteNavbar'
import HomeHero from './components/HomeHero'
import AboutUs from './components/AboutUs'
import OurApproach from './components/OurApproach'
import WhatWeSupport from './components/WhatWeSupport'
import ProposalForm from './components/ProposalForm'
import ContactSection from './components/ContactSection'
import SiteFooter from './components/SiteFooter'

function ScrollToTopOnRouteChange() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return null
}

function AppShell({ children }) {
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
      <main className="pt-20 md:pt-24">
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnRouteChange />
      <AppShell>
        <Routes>
          <Route path="/" element={<HomeHero />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/what-we-support" element={<WhatWeSupport />} />
          <Route path="/our-approach" element={<OurApproach />} />
          <Route path="/submit-a-proposal" element={<ProposalForm />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  )
}

export default App

