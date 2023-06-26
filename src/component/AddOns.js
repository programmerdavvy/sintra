import React from 'react'
import { ChevronRight, Home } from 'react-feather'
import AddOnsCard from './AddOnsCard'
import { Row,Col } from 'react-bootstrap';


function AddOns() {

  return (
    <>
<div className='p-5'>
    <div className='breadcru d-flex align-items-center'>
    <Home  size={30}/>
    <ChevronRight  size={30} color='#eee'/>
    <span className='fw-600 fs-4'>Add-ons</span>
    </div>

    <div className='pt-4'>
        <p className='fw-600' style={{fontSize:'70px'}}>Sintra Add-ons</p>
        <p className='fs-4 text-light-emphasis'>Supercharged tips, resources & tools to benefit Sintra Product Line Experience.</p>
    </div>
</div>
<div className='pt-5 pb-5 px-5' style={{background:'#F9FAFB'}}>
       <Row>
        <Col><AddOnsCard/></Col>
        <Col><AddOnsCard/></Col>
        <Col><AddOnsCard/></Col>
        <Col><AddOnsCard/></Col>
       </Row>
       <Row>
        <Col><AddOnsCard/></Col>
        <Col><AddOnsCard/></Col>
        <Col><AddOnsCard/></Col>
        <Col><AddOnsCard/></Col>
       </Row>
    </div>
    </>
  )
}

export default AddOns