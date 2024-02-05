import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IoCloseCircleOutline } from "react-icons/io5";
import { login, signup } from '../../api/AuthRequest';
import { toast } from 'react-toastify';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "55%",
  bgcolor: 'background.paper',
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  gap: 2,
  p: 3
};

export default function AuthModel({ modelOpen, setModelOpen }) {

  const [signupform, setSignupform] = useState(true)
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: ""

  })
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault()
   if (signupform) {
    console.log("hiii");
    if (data.password === data.confirmPassword) {


      // user signup

      signup(data).then((res) => {
        console.log(res.data);
        localStorage.setItem("login",true)
        // console.log(res.data);
       
        setData({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          confirmPassword: ""
        })

        setModelOpen(false)
        window.location.reload()

      }).catch((err) => {
        console.log(err.response.data);
        toast.error(err.response.data)
      })
    } else {
      toast.error('Passwords do not match')
    }
    
   }else{
   
    // user Login

      login(data).then((res) => {
        console.log(res.data);
        localStorage.setItem("login",true)

        setData({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          confirmPassword: ""
        })

        setModelOpen(false)
        window.location.reload()

      }).catch((err) => {
        console.log(err.response.data);
        toast.error(err.response.data)
      })

    
   }

  }
  return (
    <div>

      <Modal
        open={modelOpen}
        onClose={() => setModelOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}  >
          <IoCloseCircleOutline style={{ alignSelf: "end" }} onClick={() => setModelOpen(false)} />

          <div className="" style={{ fontSize: "12px", color: "green", backgroundColor: "" }}>
            Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
          </div>
          <form className='d-flex flex-row justify-content-between gap-2' onSubmit={handleSubmit}>
            <div className='d-flex flex-column gap-2'>
              <h4 className='pb-1'>{signupform ? "Create Account" : "Sign In"}</h4>
              <div>

                {signupform ? <div><input onChange={handleChange} value={data.firstname} type="text" className='col-6 p-1' name="firstname" placeholder='First Name' id="" />
                  <input onChange={handleChange} value={data.lastname} type="text" name="lastname" placeholder='Last Name' className='p-1 col-6' id="" /></div> : ""}
                <input onChange={handleChange} value={data.email} type="email" name="email" placeholder='Email' className='p-1 col-12' id="" />
                <input onChange={handleChange} value={data.password} type="password" name="password" placeholder='Password' className='p-1 col-12' id="" />
                {signupform ?
                  <input onChange={handleChange} value={data.confirmPassword} type="password" name="confirmPassword" placeholder='Conform Password' className='p-1 col-12' id="" />
                  : ""}               </div>

              <button className='btn btn-primary col-12 mt-3 mb-4 rounded-5' type='submit'>{signupform ? "Create Account" : "Sign In"}</button>
              <div className='d-flex gap-2 flex-column'>
                <button className='btn col-12 border-1 d-flex align-items-center justify-content-center flex-row gap-2' style={{ borderColor: "gray", color: "black", fontWeight: "500", fontSize: 12 }}> <img height={20} width={20} src="https://s3-alpha-sig.figma.com/img/2260/c71f/967377e16ffbb611ef03393e79e51f6e?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OVLG76Aj8unKQi5DJbBauXWvZeH4gikUDhcGBEXVXJOnCCGmLHpHF6JXqgBSPjheNtQ~gX5wQHS6CZn4EWXHlEOLuIi59E45N3XF9PLAaZCfNfAYybQtiZ-6dcatUzZmnMZWbpyPqw8-fZOsdhN-ED~PDuqWWDqFLVwUYzISqW~fYRlVySEBYFmOYpt0Tr2XU6TOHoj3JblgC5YJasG~GFooxDwPw8IxwMKTvdqlIYWJvBZV66pgqUjq4oGt1hRLLQqwEwdn4KWIE8JwYou0BVXZaypYdwOdi~DlSl1ZNBi-Pz7P16LVPfRW9UjxLOP5wi2tMypzh5IdheuwAUn2Uw__" alt='' /><span>Sign up with Facebook</span></button>
                <button className='btn col-12 border-1 d-flex align-items-center justify-content-center flex-row gap-2' style={{ borderColor: "gray", color: "black", fontWeight: "500", fontSize: 12 }}> <img height={20} width={20} src="./search.svg" alt="" /> <span>Sign up with Google</span></button>
              </div>
              {signupform ?
                ""
                :
                <span className='d-flex align-self-center text-dark pt-3 ' style={{ fontWeight: 500, fontSize: 14 }}>Forgot Password?</span>
              }
            </div>
            <div className='d-flex flex-column align-items-center'>
              <span onClick={() => setSignupform(!signupform)}>{signupform ? "Already" : "Don't"} have an account? <span className='text-primary '>{signupform ? "Sign in" : "Create New For free"}</span></span>
              <img src="./atg_illustration.png" alt="" />

            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
