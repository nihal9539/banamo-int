import React from 'react'
import { posts } from '../../data/data'
import { IoEyeOutline } from "react-icons/io5";
import { IoMdShare } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";

const Cards = () => {
    return (
        <div className='d-flex flex-column  justify-content-center align-items-center gap-3'>
            {posts.map((item, index) => (
                <div className="card w-100" >
                    <div style={{width:"100%"}}>
                        <img className="card-img-top" src={`${item.image}`}height={350} alt="Card image cap" />
                    </div>                    <div className="card-body">
                        <span>{item.type}</span>
                        <div className=" d-flex flex-row justify-content-between align-items-center">
                            <span style={{ fontSize: "1.5rem" }} className='text-md-start'>{item.title}</span>
                            <BsThreeDots size={30} color='black' />
                        </div>
                        <div>
                            <h6>{item.subtitle}</h6>
                        </div>
                        <div className='col-12 '>
                                {item.button ? (<button className={`btn ${item.button === "Visit Website" ? "text-danger" :"text-primary"} w-100`}>{item.button}</button>):""}
                            </div>
                        <div className='d-flex flex-row justify-content-between px-3'>
                            <div className="gap-2 d-flex flex-row align-items-center">
                                <img src={item.profileImage} width={50} height={50} style={{ borderRadius: "50%" }} alt="" />
                                <span style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</span>
                            </div>
                            
                            <div className="gap-2 d-flex flex-row align-items-center">
                                <div className=""><span><IoEyeOutline size={20} />1.4k views</span></div>
                                <div className='px-3 py-2' style={{ background: "#EDEEF0" }}><IoMdShare /></div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Cards
