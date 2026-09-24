import React from 'react'

import Hero from '../components/Header/Hero/Hero.jsx';
import About from '../components/Header/About/About.jsx'
import Testimonial from '../components/Header/Testimonial/Testimonial.jsx'
import Cta from '../components/Header/Cta/Cta.jsx'
import Footer from '../components/Header/Footer/Footer.jsx'


const LandingPageSreen = () => {
  return (
    <div>
       
        <Hero/>
        <About/>
        <Testimonial/>
        <Cta/>
        
    </div>
  )
}

export default LandingPageSreen
