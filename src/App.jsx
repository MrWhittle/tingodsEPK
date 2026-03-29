import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Bio from './components/Bio'
import Music from './components/Music'
import Gigs from './components/Gigs'
import Socials from './components/Socials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Bio />
        <Music />
        <Gigs />
        {/* <Socials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
