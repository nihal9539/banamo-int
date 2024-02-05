import React, { useState } from 'react'
import "./BackGroundImage.css"
import { IoMdArrowBack } from "react-icons/io";
import AuthModel from '../AuthModel/AuthModel';
import BottomSheet from '../BottomSheet/BottomSheet';

const BackGroundImage = ({ width }) => {
  const [modelOpen, setModelOpen] = useState(false)
  return (
    <div
    // className='col-md-6'
    >
      {/* <img className='image' src="./Rectangle.png" alt="" /> */}
      <div class="card">
        <img class="card-img-top" src="./Rectangle.png" height={350} alt="" />
        <div className={`card-img-overlay text-light d-flex flex-column ${width >= 900 ? "justify-content-end":"justify-content-between"} col-sm-12 `} >
          {width >= 900 ? "" : <div className='d-flex flex-row justify-content-between  '>
            <dov><IoMdArrowBack size={30} /></dov>
            <dov><button className='btn text-light border-light' onClick={() => setModelOpen(prev => !prev)}>Join Group</button></dov>
          </div>}
          <div>
            <h4 className='fs-3'>Computer Engineering</h4>
            <p>142,765 Computer Engineers follow this</p></div>
        </div>
      </div>
      {/* <AuthModel modelOpen={modelOpen} setModelOpen={setModelOpen} /> */}
      <BottomSheet isOpen={modelOpen} setOpen={setModelOpen} />
      
    </div>
  )
}

export default BackGroundImage
