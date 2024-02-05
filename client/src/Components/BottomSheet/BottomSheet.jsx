import Sheet from 'react-modal-sheet';
import { useState } from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import { IoCloseCircleOutline } from 'react-icons/io5';

const BottomSheet = ({ isOpen, setOpen }) => {
    //   const [isOpen, setOpen] = useState(false);
    const [login, setLogin] = useState(true)
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
    return (
        <>


            <Sheet isOpen={isOpen} snapPoints={[500, 400, 100, 0]} onClose={() => setOpen(false)}>
                <Sheet.Container  >
                    <Sheet.Header />
                    <Sheet.Content className='p-5'>


                        <div className='d-flex flex-column justify-content-between gap-2'>
                            <div className='d-flex flex-column gap-2'>
                                <div className='d-flex flex-row  align-items-center justify-content-between'>
                                    <h4 className='pb-1'>{login ? "Create Account" : "Welcome Back"}</h4>
                                    <IoCloseCircleOutline size={35} onClick={() => setOpen(false)} />
                                </div>
                                <div>

                                    {login ? <div><input onChange={handleChange} value={data.firstname} type="text" className='col-6 p-1' name="firstname" placeholder='First Name' id="" />
                                        <input onChange={handleChange} value={data.lastname} type="text" name="lastname" placeholder='Last Name' className='p-1 col-6' id="" /></div> : ""}
                                    <input onChange={handleChange} value={data.email} type="email" name="email" placeholder='Email' className='p-1 col-12' id="" />
                                    <input onChange={handleChange} value={data.password} type="password" name="password" placeholder='Password' className='p-1 col-12' id="" />
                                    {login ?
                                        <input onChange={handleChange} value={data.confirmPassword} type="password" name="confirmPassword" placeholder='Conform Password' className='p-1 col-12' id="" />
                                        : ""}              </div>
                                <div className='d-flex flex-row justify-content-between align-items-center'>

                                    <button className='btn btn-primary col-6 mt-3 mb-4 rounded-5'>{login ? "Create Account" : "Sign In"}</button>
                                    <span onClick={() => setLogin(!login)}>{login ? "or, Sign In" : "or, Create Account"}</span>
                                </div>
                                <div className='d-flex gap-2 flex-column'>
                                    <button className='btn col-12 border-1 d-flex align-items-center justify-content-center flex-row gap-2' style={{ borderColor: "gray", color: "black", fontWeight: "500", fontSize: 12 }}> <img height={20} width={20} src="https://s3-alpha-sig.figma.com/img/2260/c71f/967377e16ffbb611ef03393e79e51f6e?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OVLG76Aj8unKQi5DJbBauXWvZeH4gikUDhcGBEXVXJOnCCGmLHpHF6JXqgBSPjheNtQ~gX5wQHS6CZn4EWXHlEOLuIi59E45N3XF9PLAaZCfNfAYybQtiZ-6dcatUzZmnMZWbpyPqw8-fZOsdhN-ED~PDuqWWDqFLVwUYzISqW~fYRlVySEBYFmOYpt0Tr2XU6TOHoj3JblgC5YJasG~GFooxDwPw8IxwMKTvdqlIYWJvBZV66pgqUjq4oGt1hRLLQqwEwdn4KWIE8JwYou0BVXZaypYdwOdi~DlSl1ZNBi-Pz7P16LVPfRW9UjxLOP5wi2tMypzh5IdheuwAUn2Uw__" alt="" /><span>Sign up with Facebook</span></button>
                                    <button className='btn col-12 border-1 d-flex align-items-center justify-content-center flex-row gap-2' style={{ borderColor: "gray", color: "black", fontWeight: "500", fontSize: 12 }}> <img height={20} width={20} src="./search.svg" alt="" /> <span>Sign up with Google</span></button>
                                </div>
                                {login ?
                                    ""
                                    :
                                    <span className='d-flex align-self-center text-dark pt-3 ' style={{ fontWeight: 500, fontSize: 14 }}>Forgot Password?</span>
                                }
                            </div>

                        </div>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
        </>
    );
}

export default BottomSheet;