import React from 'react'
import { File, FileText ,PlusSquare } from 'react-feather'
import { Link } from 'react-router-dom';
import { Card, CardBody, CardText,Row,Col } from 'reactstrap'

function NavbarDropdown({activeUser}) {
  return (
    <div className='shadow pb-4 mb-4 bg-body rounded' style={{position:'absolute',width:'100%',padding:'15px'}}>
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
             <div className='rounded-circle' style={{background:'#efebff',padding:'12px'}} > 
                <FileText size={20} color='#5d57d9' />
            </div>
                <div className='px-4'>
                <CardText className='text-capitalize fs-6 mb-1' style={{fontWeight:'600'}}>
                    Nyxil Studio Prompts Packs
                </CardText>
                <CardText className='fs-6 '>
                    Over 10,000+ Industrial-leading ChatGPT Prompts Bundle Packs
                </CardText>
                </div>
             </div>
                    
                </CardBody>  
            </Card>
           </Link>
        </Col>
        {activeUser&&(<Col lg={4}>
          <Link to='/bots' className='text-decoration-none'>
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
             <div className='rounded-circle' style={{padding:'12px',background:'#efebff'}}> 
                <File size={20} color='#5d57d9' />
            </div>
                <div className='px-4'>
                <CardText className='text-capitalize fs-6 mb-1' style={{fontWeight:'600'}}>
                    Nyxil Studio Bots <span className='mx-2 px-3' style={{background:'#ecfdf3',padding:'5px',fontSize:'12px',  borderRadius:'15px'}}>New</span>
                </CardText>
                <CardText className='fs-6'>
                30+ Ready-to-use GPT-Empowered Automated Task Bots for your Daily Tasks.
                </CardText>
                </div>
             </div>
                    
                </CardBody>  
            </Card>
          </Link>
           
        </Col>)}
          <Col lg={4}>
          <Link to='/add-ons' className='text-decoration-none'>
          <Card style={{border:'none',cursor:'pointer'}} id='overlay2'  onMouseEnter={()=>{
                let overlay = document.getElementById('overlay2');
                    overlay.style.background = '#F9FAFB'
            }} 
            onMouseLeave={()=>{
                let overlay = document.getElementById('overlay2');
                    overlay.style.background = 'transparent'
            }}>
              <CardBody>
             <div className='d-flex align-items-center'>
             <div className='rounded-circle' style={{padding:'12px',background:'#efebff'}}> 
                <PlusSquare size={20} color='#5d57d9' />
            </div>
                <div className='px-4'>
                <CardText className='text-capitalize fs-6 mb-1' style={{fontWeight:'600'}}>
                    Nyxil Studio Add Ons
                </CardText>
                <CardText className='fs-6'>
                    Supercharged tips, resources & tools to benefit Nyxil Studio Product Line Experience.
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