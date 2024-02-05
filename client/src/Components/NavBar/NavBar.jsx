import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import AuthModel from '../AuthModel/AuthModel';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    const [modelOpen, setModelOpen] = useState(false)
    const handleModel = () => {
        setModelOpen(prev => !prev)
    }
    const login = localStorage.getItem("login")
    console.log(login);
    return (
        <Navbar expand="lg" className="bg-body-tertiary" style={{ paddingLeft: "50px" }}>
            <Container className=''>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav " className=''>
                    <Nav className="d-flex gap-5 " >

                        <Nav.Link className="me-5 pe-5 " >
                            <img src="./whole.png" alt="" />
                        </Nav.Link>
                        <Nav.Link className="me-5 pe-5 " style={{width:450}} >
                            <form className=" p-2 w-100 d-flex justify-content-center align-items-center  flex-row  " style={{ backgroundColor: "#F2F2F2", borderRadius: 20,  }}>
                                <IoSearchSharp />
                                <input type="search" className='bg-transparent w-75' placeholder="Search for your favorite groups in ATG" style={{ outline: "none", border: "none" }} />
                            </form></Nav.Link>
                        {
                            login ? (<div className='d-flex  flex-row justify-content-between px-5 py-3    '>
                                <div className="d-flex align-items-center justify-content-between gap-2">
                                    <img
                                        src='https://s3-alpha-sig.figma.com/img/8199/8e3c/09c5683fd07ee58841475464a08ce69f?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IBXF0tcBNx-K51IQbebSM5dRYL5cOg7mj14e8r56kYOWfqDrL8gZPJ3p~mdOQYnXpd6JmdIsFf~Q1gBBHRQV7~NRqPTOPATFAACBhXRbDQRh9EUyCGC53JhT18HBMvRp3jR-QQ~QdBNSRirQOsGR320UprR-kYM~BN3OGx7C1mGsNjBRhgdVjILePOUN03ieri3ZAd4ZseM~7GxztZbuPiowTJxwa7HInmC2UBiqWmWXARNoh8PVpiEPw2jdUA510viH6-9VCmR-o2MshxwC-Tw0ZljRHizFqODSehyyCprN-a37jNbS8TeE1fL1sHyKYm-9faW1IyVhy986TO6JSQ__'
                                        width={50}
                                        height={40}
                                        style={{ borderRadius: "50%" }} alt=""
                                    />
                                    <span>Siddharth Goyal</span>
                                    <MdArrowDropDown />
                                </div>
                            </div>) :
                                <Nav.Link className="me-5 pe-5 " >
                                    <span className="navbar-brand" onClick={() => setModelOpen(prev => !prev)}>Create account. <span style={{ color: "blue" }}>It’s free!</span><MdArrowDropDown /></span>
                                </Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
            <AuthModel modelOpen={modelOpen} setModelOpen={setModelOpen} />
        </Navbar>
    );
}

export default NavBar;
