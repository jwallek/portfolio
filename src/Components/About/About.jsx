import React from 'react'
import './About.css'
import { BsCodeSlash } from 'react-icons/bs'



function About() {
  return (
    <div className='about-container'>
      <div className="about-body">
        <div className="about-body-logo">
          <BsCodeSlash className='about-logo'/>
        </div>
          <div className='about-body-text'><span data-aos="fade-right" data-aos-duration="2000">Hello, I'm Joseph.</span> <span data-aos="fade-right" data-aos-duration="2000" data-aos-delay="250">I am a junior software engineer with experience working in
            <span className='about-emphasis'> front-end</span> and <span className='about-emphasis'>back-end</span> development.</span> <span data-aos="fade-right" data-aos-duration="2000" data-aos-delay="500">I enjoy solving problems and learning new technologies.</span> 
            
          </div>
        </div>
    </div>
  )
}

export default About