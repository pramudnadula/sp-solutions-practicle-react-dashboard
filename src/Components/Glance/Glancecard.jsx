import React from 'react'

const Glancecard = (props) => {

  return (
    <div>
      <div className='cardworkflow'>
        <div className='rowofworkflows'>
          <span>{props?.number}</span>
          <div className='vl'></div>
          <img src={props?.img} alt='img1' />
          <span>  {props?.name}</span>
        </div>
        <div className='glancicon'>
          <i className={props?.icon}></i>
        </div>
      </div>
    </div>
  )
}

export default Glancecard;
