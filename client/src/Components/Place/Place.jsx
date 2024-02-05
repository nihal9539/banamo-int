import React, { useState } from 'react'
import { RiPencilFill } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { followData } from '../../data/followersData';



const Place = () => {
    const [place, setPlacw] = useState('')
    const handlechange = (e) => {
        setPlacw(e.target.value)
    }
    return (
        <div className='d-flex  flex-column  w-100 gap-5'>
            <form className=" p-2 gap-1 flex justify-content-center align-items-center flex flex-column " >
                <CiLocationOn />
                <input  type="text" className='bg-transparent border-bottom-1' value={place} placeholder={`Noida, India`} onChange={handlechange} style={{ outline: "none", border:"none", borderBottomColor: "gray" }} />
                <RiPencilFill />
            </form>
            <div className='d-flex flex-row'> 
                <AiOutlineExclamationCircle size={22} className='mt-1'/>
                <span>Your location will help us serve better and extend a personalised experience.</span>
            </div>
            <div className=''>
                < AiFillLike />
                <span style={{fontSize:15, fontWeight:600}}>Recommended Groups</span>

                {followData.map((item)=>(
                    <div className='d-flex  flex-row justify-content-between px-5 py-3    '>
                        <div className="d-flex align-items-center justify-content-between gap-2">
                        <img src={item.img} width={50} height={50} style={{borderRadius:"50%"}} alt="" />
                        <span>{item.name}</span>
                        </div>
                        <button className='btn rounded-5  py-0 px-4' style={{background:"#EDEEF0"}}>follow</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Place
