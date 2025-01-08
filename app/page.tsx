import React from 'react'
import Navbar from '@/components/Nav'
import HeroSection from '@/components/Hero'
import HeroOne from '@/components/HeroOne'

const HomePage  = () => {
  return (
    <div>
     <Navbar></Navbar>
     <HeroOne></HeroOne>
     <HeroSection></HeroSection>
    </div>
  )
}

export default HomePage 
