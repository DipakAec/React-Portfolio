import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/contempory.png'
import IMG2 from '../../assets/uma.png'
import IMG3 from '../../assets/raga.png'
import IMG4 from '../../assets/sibarita.png'
import IMG5 from '../../assets/mindbrew.png'
import IMG6 from '../../assets/promo.png'

const data = [
  
  {
    id:1,
    img:IMG5,
    title:'MindBrew Studio',
    technology:'HTML,CSS,JS,PHP,MySQL',
    Work: 'Development',
    live:'https://mindbrewstudio.com/'
  }
,
{
  id:2,
  img:IMG3,
  title:'Raga Kitchen solutions',
  technology:'HTML,CSS,JS,PHP,MySQL',
  Work: 'Development',
  live:'https://ragakitchen.com/'
},

  {
    id:3,
    img:IMG1,
    title:'Contempory Real stete',
    technology:'WordPress',
    Work: 'Development & Maintenence',
    live:'https://contemporaryrealestate.ae/'
  }
  ,

  {
    id:4,
    img:IMG4,
    title:'Madame Sibarita',
    technology:'WordPress,CSS,JS,PHP,MySQL',
    Work: 'Maintenence',
    live:'http://madamesibarita.com/'
  }
  ,
  {
    id:5,
    img:IMG2,
    title:'UMA group',
    technology:'HTML,CSS,JS',
    Work: 'Development',
    live:'https://umagroup.in/'
  }
  ,
  {
    id:6,
    img:IMG6,
    title:'Ant Promoskope',
    technology:'HTML,CSS,JS,PHP,MySQL',
    live:'https://promoskope.com/'
  }
  
  
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h3>My Works in Office </h3>
      <h2>Portfolio</h2>
      
      <div className='container portfolio_container'>
        {
                    data.map(({id, img, title,Work,technology, live}) => {
                      return(
            
                        <article key={id} className='portfolio-item'>
                              <div className='portfolio-item-image'>
                                <img src={img} alt="" />
                              </div>
                               <h3>{title}</h3>
                               <h4>Work: {Work}</h4>
                               <h4>Technology: {technology}</h4>
                              <a href={live} className='btn btn-primary' target="blank">See Live</a>
                        </article>
            
                      )
            
                    })
        }
      </div>
    </section>
  )
}

export default portfolio
