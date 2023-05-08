import React from 'react' 
import CV from '../../assets/cv.pdf'


const cta = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        <a href="https://dipak3dportfolio.netlify.app/" className='btn-port' target="blank">3D Portfolio</a>
    </div>
  )
}

export default cta