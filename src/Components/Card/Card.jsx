import React from 'react'
import './Card.css'
import { CardData } from '../../Data/Data'
const Card = () => {
    return (
        <div className='Card3'>
            {CardData.map((item, i) => (   
            <div className='mcard'>
                <div>
                    <img src={item.image} alt='logo' />
                    <span>{item.title}</span>
                </div>
                <div className='numbercol'>
                    <div>{item.number}</div>
                    <div>
                        <span>{item.netTitle}</span>
                        <span>{item.new}</span>
                    </div>
                    <div>
                        <span>{item.returnTitle}</span>
                        <span>{item.return}</span>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Card