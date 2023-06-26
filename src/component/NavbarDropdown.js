import React from 'react'
import { FileText ,PlusSquare } from 'react-feather'
import { Link } from 'react-router-dom';
import { Card, CardBody, CardText,Row,Col } from 'reactstrap'

function NavbarDropdown() {
  return (
    <div className='shadow  mb-5 bg-body rounded' style={{position:'absolute',width:'100%',padding:'40px'}}>
    <Row>
        <Col lg={4}>
           <Link to='/prompt-packs' className='text-decoration-none'>
           <Card style={{border:'none',cursor:'pointer'}} id='overlay'
             onMouseEnter={()=>{
                let overlay = document.getElementById('overlay');
                    overlay.style.background = '#F9FAFB'
            }} 
            onMouseLeave={()=>{
                let overlay = document.getElementById('overlay');
                    overlay.style.background = 'transparent'
            }}
            >
              <CardBody>
             <div className='d-flex align-items-center mb-4' >
             <div className='p-3 rounded-circle' style={{background:'#efebff'}}> 
                <FileText size={30} color='#5d57d9' />
            </div>
                <div className='px-4'>
                <CardText className='text-capitalize fs-5 mb-1' style={{fontWeight:'600'}}>
                    Sintra Prompts Packs
                </CardText>
                <CardText className='fs-5 '>
                    Over 10,000+ Industrial-leading ChatGPT Prompts Bundle Packs
                </CardText>
                </div>
             </div>
                    
                </CardBody>  
            </Card>
           </Link>
        </Col>
          <Col lg={4}>
          <Link to='/add-ons' className='text-decoration-none'>
          <Card style={{border:'none',cursor:'pointer'}} id='overlay3'  onMouseEnter={()=>{
                let overlay = document.getElementById('overlay3');
                    overlay.style.background = '#F9FAFB'
            }} 
            onMouseLeave={()=>{
                let overlay = document.getElementById('overlay3');
                    overlay.style.background = 'transparent'
            }}>
              <CardBody>
             <div className='d-flex align-items-center'>
             <div className='p-3 rounded-circle' style={{background:'#efebff'}}> 
                <PlusSquare size={30} color='#5d57d9' />
            </div>
                <div className='px-4'>
                <CardText className='text-capitalize fs-5 mb-1' style={{fontWeight:'600'}}>
                    Sintra Add-ons
                </CardText>
                <CardText className='fs-5'>
                    Supercharged tips, resources & tools to benefit Sintra Product Line Experience.
                </CardText>
                </div>
             </div>
                    
                </CardBody>  
            </Card>
          </Link>
           
        </Col>
    </Row>
    </div>
  )
}

export default NavbarDropdown