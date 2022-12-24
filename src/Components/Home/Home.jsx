import React from 'react'
import './Home.css'

import { HiOutlineExternalLink } from 'react-icons/hi'

function Home() {
  return (
    <div className='home-container'>
        <h1 className='home-title' data-aos="fade-down" data-aos-duration="1500">Joseph Wallek</h1>
        
        <hr className='home-hr'/>
        <h3 className='home-subtitle' data-aos="fade-right" data-aos-duration="1500">Junior Software Engineer</h3>
        <div className="home-links">
            <a href="https://www.linkedin.com/in/joseph-wallek/" target={"_blank"} rel="noreferrer" className="home-link" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1500">LinkedIn <HiOutlineExternalLink/></a>
            <a href="https://github.com/jwallek" className="home-link" data-aos="fade-up" target={"_blank"} rel="noreferrer"  data-aos-delay="750" data-aos-duration="1500">Github <HiOutlineExternalLink /></a>
        </div>
    </div>
  )
}

export default Home