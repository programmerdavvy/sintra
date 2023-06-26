import React, { useState } from 'react'

import { Nav,Navbar,Container } from 'react-bootstrap';
import {Button} from 'reactstrap'
import Logo from '../assets/images/logo.png';
import { User,ChevronDown } from 'react-feather';
import NavbarDropdown from './NavbarDropdown';
import { Link } from 'react-router-dom';

const  Navbarmenu = () => {
    const [showDropDown,setShowDropDown] = useState(false);

    const handleOpenDropdown = ()=>{
            let  chevronDown = document.getElementById('chevronDown');
            chevronDown.style.transform = 'rotate(180deg)';
            chevronDown.style.transition = '0.5s';
            setShowDropDown(true)
    }

    const handleCLoseDropdown = ()=>{
            let  chevronDown = document.getElementById('chevronDown');
            chevronDown.style.transform = 'rotate(1deg)';
            setShowDropDown(false);
}
    const toggleDropdown = ()=>{
        setShowDropDown(!showDropDown);

        
    }

  return (
    <div>
    <Navbar expand="lg"  className="p-4" style={{borderBottom:'1px solid #eee'}}>
      <Container fluid  className='p-3'>
        <Navbar.Brand href="/">
            <img src={Logo} className='img-fluid' width='120' alt='logo'/>
        </Navbar.Brand>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fs-5" style={{fontWeight:'600'}}>
            <Nav.Link href="#home">Prompts  <span className='fs-6 mx-2' 
                style={{
                    background:'#ecfdf3',borderRadius:'10px',padding:'6px'
                 }}
            
            >New</span>
            </Nav.Link>
           <Nav.Link href='#'  onMouseEnter={()=>handleOpenDropdown()} onClick={toggleDropdown}>
            Products <ChevronDown  id='chevronDown'/>
           </Nav.Link>
          </Nav>
          <Nav>
            <div className='d-flex'>
            <Link to='/login' className='text-decoration-none'>
                <Button className='mt-4  fs-5 fw-600' 
                      style={{padding:'12px',background:'white',fontWeight:'600',
                      borderRadius:'15px',border:'none',width:'100px',color:'black'
                      
                      }}>
                        Log in
                </Button> 
            </Link>
                <Button className='mt-4 fs-5 fw-600 ' 
                  style={{padding:'12px',background:'#6042EC',fontWeight:'600',
                  borderRadius:'15px',border:'none',width:'100px'
                  
                  }} >
                    Sign up
                   </Button>
            </div>
            <div className='bg-light d-none p-2 rounded-circle'>
                <User size={25}/>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div onMouseLeave={()=>handleCLoseDropdown()}>
    {showDropDown&&<NavbarDropdown/>}
    </div>
    </div>
  )
}

export default Navbarmenu;