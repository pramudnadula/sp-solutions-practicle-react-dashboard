import React, { useState } from 'react'
import './RightBar.css'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar'
import profile from '../../Images/img.png'
import img1 from '../../Images/img1.png'
import img2 from '../../Images/img2.png'
import img3 from '../../Images/img3.png'
import img4 from '../../Images/img4.png'
import img5 from '../../Images/img5.png'
import img6 from '../../Images/img6.png'

const RightBar = () => {
    const [value, onChange] = useState(new Date());
    console.log(value)
    return (
        <div className='RightBar'>
            <div className='profileName'>
                <img className='profile' src={profile} alt='logo' />
                <div className='profileDetails'>
                    <span>Pramud Nadula</span>
                    <i className="fa-solid fa-sort-down"></i>
                    <span>Software Engineer</span>
                </div>
            </div>
            <div className='details'>
                <div >
                    <i className="fa-solid fa-envelope"></i>
                    <span> pramudn@gmail.com</span>
                </div>
                <div>
                    <i className="fa-solid fa-phone"></i>
                    <span>+94 768563051 </span>
                </div>
            </div>
            <hr />
            <div className='Myreport'>
                <span>My Report</span>
                <div>
                    <img src={img1} alt='logo' />
                    <img src={img2} alt='logo' />
                    <img src={img3} alt='logo' />
                    <img src={img4} alt='logo' />
                </div>
            </div>
            <hr />
            <div>
                <Calendar className='react-calendar' onChange={onChange} value={value} />
            </div>
            <hr />
            <div className='task'>
                <div className='card'>
                    <div>
                        <img className='img6' src={img6} alt='logo' />
                        <span>Tasks Return by me</span>
                    </div>
                    <div>
                        <span>41</span>

                    </div>

                </div>
                <div className='card'>
                    <div>
                        <img src={img5} alt='logo' />
                        <span>Tasks Return by me</span>
                    </div>
                    <div>
                        <span>20</span>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default RightBar