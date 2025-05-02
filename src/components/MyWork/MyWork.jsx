import React from 'react'
import './MyWork.css'
import MyWorkData from '../../assets/MyWorkData'
import { FaArrowRightLong } from 'react-icons/fa6'

function MyWork() {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>
      <div className="mywork-container">
        {MyWorkData.map((work,index)=>{
            return <img key={index} src={work.w_img} alt="" />
        })}
      </div>
      <div className="mywork-showmore">
        Show more
        <FaArrowRightLong />
      </div>
    </div>
  )
}

export default MyWork
