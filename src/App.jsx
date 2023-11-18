import React from 'react'
import Header from './components/Header/header'
import Hero from './components/Hero/hero'
import Carousel from './components/Carousel/ResponsiveCarousel'
import Swiss_school from './components/why_swiss_school/swiss_school'
import Program_Highlights from './components/Program_Highlights/program_Highlights'
import Acreditions from './components/Acreditions/acreditions'
import Unbeatable_reason from './components/Reason_section/unbeatable_reason'
import Power_skills from './components/Power_skills/power_skills'
import Uae_professionals from './components/Uae_professionals/uae_professionals'
function App() {
  return (
    <div className='body'>
      <Header/>
      <Hero/>
      <Carousel/>
      <Swiss_school/>
      <Program_Highlights/>
      <Acreditions/>
      <Unbeatable_reason/>
      <Power_skills/>
      <Uae_professionals/>
    </div>
  )
}

export default App
