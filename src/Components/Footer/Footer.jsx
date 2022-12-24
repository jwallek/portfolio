import React from 'react'
import './Footer.css'
import { HiOutlineExternalLink } from 'react-icons/hi'

function Footer() {
  return (
    <div className='footer-container'>
        <div className="home-links">
            <a href="https://www.linkedin.com/in/joseph-wallek/" target={"_blank"} rel="noreferrer" className="home-link">LinkedIn <HiOutlineExternalLink/></a>
            <a href="https://github.com/jwallek" target={"_blank"} rel="noreferrer" className="home-link">Github <HiOutlineExternalLink /></a>
        </div>
    </div>
  )
}

export default Footer