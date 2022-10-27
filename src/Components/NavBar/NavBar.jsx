import React, { useState } from 'react'
import { menubar } from '../../Data/Data'
import Card from '../Card/Card'
import Chart from '../Chart/Chart'
import Glance from '../Glance/Glance'
import './NavBar.css'
const NavBar = () => {
    const [selected, setSelected] = useState(0)

    return (
        <div>
            <nav className='navbar'>
                <img className='logo' src='http://sp-solutions.biz/wp-content/uploads/2020/08/edgeVantage-payments-logo.png' alt='logo' />
                <ul>

                    {menubar.map((item, index) => {
                        return (
                            <li key={index}
                                className={selected === index ? 'menuItem active' : 'menuItem'}
                                onClick={() => setSelected(index)}
                            >
                                <i className={item.icon}></i>
                                <a className={selected === index ? 'active' : ''} href={item.id}>{item.heading}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <div>
                <Card />
            </div>
            <div className='workflow'>
                <Glance />
                <Chart />
            </div>
        </div>
    )
}

export default NavBar