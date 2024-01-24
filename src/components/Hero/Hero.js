import React from 'react'
import Intro from './Intro'
import Slider from './Slider'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero' id='hero-section'>
            <Intro />
            {/* <Slider className='slider' /> */}
    </div>
  )
}

export default Hero