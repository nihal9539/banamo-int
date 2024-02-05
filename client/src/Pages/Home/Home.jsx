import React, { createContext, useEffect, useRef, useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import BackGroundImage from '../../Components/BackGroundImage/BackGroundImage'
import PostAndDetails from '../../Components/PostAndDetails/PostAndDetails'
import JoinGroupSection from '../../Components/JoinGroupSection/JoinGroupSection'
import { RiPencilLine } from "react-icons/ri";
import BottomSheet from '../../Components/BottomSheet/BottomSheet'

const Home = () => {
  const [modelOpen, setModelOpen] = useState(false)

  const [windowDimension, detectHw] = useState({
    winwidth: window.innerWidth,
    winHeight: window.innerHeight,
  })
  const detectSize = () =>
    detectHw({
      winwidth: window.innerWidth,

      winHeight: window.innerHeight,

    })

  useEffect(() => {
    window.addEventListener('resize', detectSize)
    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimension])
  console.log(windowDimension.winwidth);
  return (
    <div className='d-flex flex-column'>
      {windowDimension.winwidth >= 990? "" : <button onClick={() => setModelOpen(!modelOpen)} className=' d-inline-flex position-fixed justify-content-end z-1 p-3' style={{ bottom: "2.5rem", right: "2.5rem", borderRadius: "50%", backgroundImage: "linear-gradient(rgba(255, 92, 92, 1), rgba(240, 86, 138, 1))" }}><RiPencilLine color='white' size={30} /></button>
      }
      <NavBar />
      <BackGroundImage width={windowDimension.winwidth} />
      <JoinGroupSection width={windowDimension.winwidth} />
      <PostAndDetails width={windowDimension.winwidth} />
      <BottomSheet isOpen={modelOpen} setOpen={setModelOpen} />

    </div>
  )
}

export default Home
