import React from 'react'
import './Chart.css'
import img8 from '../../Images/img8.png'
import { PieChart } from 'react-minimal-pie-chart';
import img9 from '../../Images/img9.png'

const Chart = () => {
  const data = [
    { title: 'Today - 1', value: 1, color: '#658b73' },
    { title: '1 day - 1', value: 1, color: '#ffd5bb' },
    { title: '7 day - 5', value: 5, color: '#476496' },
    { title: '30 day - 4 ', value: 4, color: '#f09425' },
    { title: 'Over 30 day - 7', value: 7, color: '#de4e17' },
  ]

  const total = data.reduce((sum, { value }) => sum + value, 0);


  const defaultLabelStyle = {
    fontSize: '5px',
    fontFamily: 'sans-serif',
    color: '#ffffff',
  };

  return (
    <div>
      <div className='Chart'>
        <div className='subchart'>
          <img src={img8} alt='img7' />
          <span>Workflows at Glance</span>
        </div>
        <div className='chartall'>
          <div className='piechart'>
            <div>
              <img src={img9} alt='img9' />
              petty cash - {total}
            </div>
            <PieChart data={data}
              label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
              labelStyle={{
                ...defaultLabelStyle,
              }}
            />
          </div>
          <div className='ChartDetails'>
            {data.map((item, i) => (
              <div key={i} className='piechartDetails'>

                <div className='piechartColor' style={{ backgroundColor: item.color }}></div>
                <span>{item.title}</span>

              </div>
            ))}

          </div>
        </div>

      </div>
      <div className='chartbottom'>
        <div className='bottondiv'>
          <i className="fa-regular fa-clock" style={{ color: 'red', margin: '10px' }}></i>
          <span>Clocked Time</span>
          <h1>4H:18M</h1>
          <div>
            <div class="clock__bar">
              <span class="clock__percentage clock__xd"></span>
            </div>
            <div className='clockTime'>
              <span>8.30PM</span>
              <span>5.30PM</span>
            </div>
          </div>
        </div>
        <div className='bottondiv'>
          <div>
            <span>WF Number</span>
          </div>
          <div className='wfnumber'>
            <input type='text' placeholder='Enter WF Number' />
            <button>Go</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chart