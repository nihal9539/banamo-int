import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import AuthModel from '../AuthModel/AuthModel';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar} from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    const [modelOpen, setModelOpen] = useState(false)
    const handleModel = () => {
        setModelOpen(prev => !prev)
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary " style={{paddingLeft:"50px"}}>
            <Container className=''>
                {/* <Navbar.Brand href="#home"></Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav " className=''>
                    <Nav className="d-flex gap-5 " >

                        <Nav.Link  className="me-5 pe-5 " >
                        <img src="./whole.png" alt="" />
                        </Nav.Link>
                        <Nav.Link  className="me-5 pe-5 " >
                            <form className="bg-gradient p-2 w-100 flex justify-content-center align-items-center  flex-row  " style={{ backgroundColor: "#F2F2F2", borderRadius: 20 }}>
                                <IoSearchSharp />
                                <input type="search" className='bg-transparent w-75' placeholder="Search for your favorite groups in ATG" style={{ outline: "none", border: "none" }} />
                            </form></Nav.Link>
                        <Nav.Link  className="me-5 pe-5 " >
                            <span className="navbar-brand" onClick={() => setModelOpen(prev => !prev)}>Create account. <span style={{ color: "blue" }}>It’s free!</span><MdArrowDropDown /></span>
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
            <AuthModel modelOpen={modelOpen} setModelOpen={setModelOpen} />
        </Navbar>
    );
}

export default NavBar;
