import React from 'react'
import Header from './components/Header/header'
import Hero from './components/Hero/hero'
import Carousel from './components/Carousel/ResponsiveCarousel'
import Swiss_school from './components/why_swiss_school/swiss_school'
function App() {
  return (
    <div className='body'>
      <Header/>
      <Hero/>
      <Carousel/>
      <Swiss_school/>
    </div>
  )
}

export default App
