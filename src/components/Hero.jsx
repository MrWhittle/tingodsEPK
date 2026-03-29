import React from 'react'
import styled from '@emotion/styled'

const StyledSection = styled.section`
  height: 100vh;
  background: url('./mainHero.jpg') no-repeat center center;
  background-size: cover;
  position: relative;
    padding: 0 20px;
`

const StyledOverlay = styled.div`
  position: absolute;
  bottom: 80px; 
   left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.6);

  `

export default function Hero() {
  return (
  
    <StyledSection className="relative bg-gradient-to-b from-slate-900 to-slate-800 py-20 sm:py-32 px-4">
      <StyledOverlay className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 animate-slide-up">
         Tin Gods
        </h2>
        <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto animate-slide-up">
            Tin Gods are a long-standing indie-rock band hailing from Preston, UK, known for their anthemic sound and deep roots in the local music scene.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#music" className="bg-black hover:bg-black-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105">
            Listen Now
          </a>
          <a href="#contact" className="border-2 border-black text-white hover:bg-black hover:text-white font-bold py-3 px-8 rounded-lg transition">
            Get in Touch
          </a>
        </div>
      </StyledOverlay>
    </StyledSection>

  )}