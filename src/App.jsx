import React from 'react'
import Header from './components/Header/header'
import Hero from './components/Hero/hero'
import Carousel from './components/Carousel/ResponsiveCarousel'
function App() {
  return (
    <div className='body'>
      <Header/>
      <Hero/>
      <Carousel/>
    </div>
  )
}

export default App
