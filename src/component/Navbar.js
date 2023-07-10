import React, { useState } from 'react'

import { Nav,Navbar,Container } from 'react-bootstrap';
import {Button} from 'reactstrap'
import Logo from '../assets/images/nyxil_logo.png';
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
    <Navbar expand="lg"  className="p-3" style={{borderBottom:'1px solid #eee'}}>
      <Container fluid  className=''>
        <Navbar.Brand href="/">
            <img src={Logo} className='img-fluid mx-3' width='90' alt='logo'/>
        </Navbar.Brand>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fs-6 fw-600">
            <Nav.Link href="/prompts">Prompts
               <span className='mx-2 px-3' style={{background:'#ecfdf3',padding:'5px',fontSize:'12px',  borderRadius:'15px'}}>New</span>

            </Nav.Link>
           <Nav.Link href='#'  onMouseEnter={()=>handleOpenDropdown()} onClick={toggleDropdown}>
            Products <ChevronDown  id='chevronDown'/>
           </Nav.Link>
          </Nav>
          <Nav>
            <div className=''>
            <Link to='/login' className='text-decoration-none'>
                <Button className=' fs-6 fw-600' 
                      style={{background:'white',fontWeight:'600',
                      borderRadius:'12px',border:'none',width:'100px',color:'black',padding:'12px',
                      
                      }}>
                        Log in
                </Button> 
            </Link>
                <Link to='/signup'><Button className='fs-6 fw-600 ' 
                  style={{background:'#6042EC',fontWeight:'600',
                  borderRadius:'12px',border:'none',width:'100px',padding:'12px',
                  
                  }} >
                    Sign up
                   </Button></Link>
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