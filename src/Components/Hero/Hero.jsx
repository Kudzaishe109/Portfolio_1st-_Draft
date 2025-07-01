import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div id='hero' className='hero'>
      <img src='src\assets\gdg_img.jpeg' alt="" />
      <h1><span>I am Kudzaishe Chikowore,</span> a backend developer based in Harare, Zimbabwe.</h1>
      <p>I am a software development student @ Uncommon.org.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">Download Resume</div>
      </div>
    </div>
  )
}

export default Hero
