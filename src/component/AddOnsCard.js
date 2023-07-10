import React from 'react'
import {  CardBody, Button } from 'reactstrap'
import AddOnsImg from '../assets/images/productimage.png'
import { Link } from 'react-router-dom'

function AddOnsCard() {
  return (
    <>
        <div className='bg-white mb-4 shadow  pb-5 p-4 ' style={{border:'none',borderRadius:'15px',width:'97%'}} key={'sak'}>
            <div className='item-img text-center mx-auto'>
              <Link to='#'>
                <img className='img-fluid card-img-top' src={AddOnsImg} alt={'nae'} />
              </Link>
            </div>
            <CardBody>
             <div>
             <Button style={{background:'#f2f4f7',border:'none', borderRadius:'20px',color:'#6042EC',fontSize:'14px'}}>Add-on</Button>
             </div>
             <div>
                <h5 className='pt-3 text-light-emphasis fw-600' style={{lineHeight:'1.5'}}>449+ AI Software & Tools</h5>
             </div>
             <div> 
                  <Button className='mt-4 w-100  fs-6 ' 
                  style={{padding:'12px',background:'#6042EC',fontWeight:'600',borderRadius:'15px',border:'none'}} >
                    Sign up
                    </Button>
                </div>
            </CardBody>
          </div>
    </>
  )
}

export default AddOnsCard;