import React from 'react'
import HeroSection from './component/HeroSection'

const About = () => {
  const data = {
    name: "The Book Store",
  }
  return (
    <HeroSection myData={data}/>
  )
}

export default About