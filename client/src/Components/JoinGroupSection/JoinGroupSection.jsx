import React, { useState } from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { MdGroupAdd } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import AuthModel from '../AuthModel/AuthModel';
import { RiLogoutBoxRLine } from "react-icons/ri";
import { toast } from 'react-toastify';



const JoinGroupSection = ({ width }) => {

    const [alignment, setAlignment] = useState('left');
    const [modelOpen, setModelOpen] = useState(false)
    const user = localStorage.getItem('login')

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const buttomvalues = [
        " All posts",
        " Article"
    ]
    const handlesignout = ()=>{
        localStorage.removeItem("login")
        window.location.reload()
        toast.error("Log out")
    }
    return (
        <div>

            {width >= 990 ? <div className=' d-flex flex-column align-items-center'>
                <div className='d-flex flex-row justify-content-between   col-9 pt-3'>
                    <div>
                        <ToggleButtonGroup
                            style={{ border: "none", }}
                            value={alignment}
                            exclusive
                            onChange={handleAlignment}
                            aria-label="text alignment"
                        >
                            {["All posts", "Article", "Event", "Education", "Job"].map((item) => (
                                <ToggleButton style={{ borderTop: "none", backgroundColor: "white", borderLeft: "none", borderRight: "none", fontSize: 12, padding: "8px" }} value="left" aria-label="left aligned">
                                    {item}
                                </ToggleButton>
                            ))}
                            {buttomvalues.map}

                        </ToggleButtonGroup>
                    </div>
                    <div className='d-flex flex-row gap-2'>
                        <button className='btn ' style={{ background: '#EDEEF0' }}>Write a post <MdArrowDropDown /></button>
                        {user ?
                            <button className='btn btn-white border-1 border-black align-items-center d-flex gap-1' onClick={handlesignout}><RiLogoutBoxRLine />Leave Group</button>
                            :
                            <button className='btn btn-primary align-items-center d-flex gap-1' onClick={() => setModelOpen(prev => !prev)}><MdGroupAdd />Join Group</button>
                        }
                    </div>
                </div>
                <AuthModel modelOpen={modelOpen} setModelOpen={setModelOpen} />
                <hr className='w-75' />
            </div> : <div className='d-flex flex-row justify-content-between p-4 align-items-center'>
                <div><span>Posts <span>(368)</span></span></div>
                <div><button className='btn btn-secondary'>Filter:All<MdArrowDropDown /></button></div>
            </div>}
        </div>
    )
}

export default JoinGroupSection



