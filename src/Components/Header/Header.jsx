import React from 'react'
import './Header.css'
import { BsEyeglasses } from 'react-icons/bs'

function Header() {
  return (
    <div className='header-container'>
        <div className="header-logo" data-aos="fade-up-right" data-aos-duration="1500">JW</div>
        <div className="header-resume" data-aos="fade-up-left" data-aos-duration="1500"><button>RESUME</button></div>
    </div>
  )
}

export default Header