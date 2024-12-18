import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Services from './Services/Services'
import Project from './Project/Project'
import Skills from './Skills/Skills'
import Reviews from './Reviews/Reviews'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <About/>
      <Services/>
      <Project/>
      <Skills/>
      <Reviews/>
    
    </div>
  )
}

export default Home