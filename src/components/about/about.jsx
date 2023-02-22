import React from 'react'
import './about.css'
import ME from '../../assets/dipakimg.jpg'
import {FaUserGraduate} from 'react-icons/fa'
import {FaAward} from 'react-icons/fa'
import {BsFilePersonFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h3>Get to Know</h3>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__containt">
          <div className="about__cards">
          <article className='about__card'>
              <BsFilePersonFill className='about__icon'/>
              <h2>Personal Details</h2>
              <h3>Dipak Kumar Paul</h3>
              <h4>Location :- Kolkata</h4>
              <h4>Email :- pauldipakkr@gmail.com</h4>
              <h4>Mobile :- 8967671041</h4>
            </article>

            <article className='about__card'>
              <FaUserGraduate className='about__icon'/>
              <h2>Educatioin</h2>
              <h3>B.Tech,2016</h3>
              <h4>Asansol Engineering College</h4>
              <h3>HS,2011</h3>
              <h4>Fulia Sikshaniketan</h4>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h2>Experience</h2>
              <h3> <a className='exp-ancor' href="https://www.mindbrewstudio.com/index.html"> Mind Brew Studio </a> - Currently Working</h3>
              <h4>Web Developer</h4>
              <h3> <a className='exp-ancor' href="http://www.stmarysgroupofinstitutions.in/"> St.Mary's Arcadian School </a> - Formar</h3>
              <h4>Assistant Teacher</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About