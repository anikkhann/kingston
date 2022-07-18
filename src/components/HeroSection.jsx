import React from 'react'
import HeroRight from './HeroRight'
import HeroSlider from './HeroSlider'

const HeroSection = () => {
  return (
    <div className='flex'>
        <div className='w-1/2'>
        <HeroRight />
        </div>
        <div className='w-1/2'>
        <HeroSlider />
        </div> 
    </div>
   
  )
}

export default HeroSection