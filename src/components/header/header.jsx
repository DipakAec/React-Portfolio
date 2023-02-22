import React from 'react'
import './header.css'
import CTA from './cta'
import ME from '../../assets/dipakimg3.png'
import Headersolial from './headersolial'
const header = () => {
  return (
    <header>
      <div className="container header__container">

        <h3>Hello , I am</h3>
        <h1 className='h-name'>Dipak Kumar Paul</h1>
        <h2>Web Developer</h2>
        <CTA />
        <Headersolial/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scrollDown'> Scroll Down</a>
      </div>
    </header>
  )
}

export default header