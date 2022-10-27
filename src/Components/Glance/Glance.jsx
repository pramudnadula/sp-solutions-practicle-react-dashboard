import React from 'react'
import './Glance.css'
import img7 from '../../Images/img7.png'
import Glancecard from './Glancecard'
import { UpdatesData } from '../../Data/Data'

const Glance = () => {
  return (
    <div className='Glance'>
      <div className='headglance'>
        <div className='subglance'>
          <img src={img7} alt='img7' />
          <span>Workflows at Glance</span>
        </div>
        <div className='glanceSearch'>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input className='search' type='text' placeholder='Search Wrokflows' />
        </div>
      </div>
      <div>
        <div className='scrollglance'>
          {UpdatesData.map((item, index) => {
            return (
              <div key={index}>
                <Glancecard 
                  number={item.number}
                  img={item.img}
                  name={item.name}
                  icon={item.icon}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Glance