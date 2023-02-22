import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {FaUniversity} from 'react-icons/fa'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageDots} from 'react-icons/bi'
import {FaCode} from 'react-icons/fa'
import { useState } from 'react'

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={ activeNav==='#'? 'active' :""}> <AiOutlineHome/> </a>
      <a href="#about" onClick={()=>setActiveNav('about')} className={ activeNav==='about'? 'active' :""}> <AiOutlineUser/> </a>
      <a href="#experience" onClick={()=>setActiveNav('experience')} className={ activeNav==='experience'? 'active' :""}> <FaUniversity/> </a>
      <a href="#portfolio" onClick={()=>setActiveNav('portfolio')} className={ activeNav==='portfolio'? 'active' :""}> <RiServiceLine/> </a>
      <a href="#projects" onClick={()=>setActiveNav('projects')} className={ activeNav==='projects'? 'active' :""}> <FaCode/> </a>
      <a href="#contact" onClick={()=>setActiveNav('contact')} className={ activeNav==='contact'? 'active' :""}> <BiMessageDots/> </a>
    </nav>
  )
}

export default Nav