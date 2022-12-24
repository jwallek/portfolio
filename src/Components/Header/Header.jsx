import React from 'react'
import './Header.css'
import { BsEyeglasses } from 'react-icons/bs'


function Header() {
  return (
    <div className='header-container'>
        <div className="header-logo" data-aos="fade-up-right" data-aos-duration="1500">JW</div>
        <button className="header-resume" data-aos="fade-up-left" data-aos-duration="1500"><a href={'./Resume2022.pdf'} target={"_blank"} rel={"noreferrer"} >RESUME</a></button>
    </div>
  )
}

export default Header