import React from 'react'
import { ChevronRight, Home } from 'react-feather'
import AddOnsCard from './AddOnsCard'
import { Row,Col } from 'react-bootstrap';


function AddOns() {

  return (
    <>
      <div className='promptsHeaderContainer'>
          <div className='breadcru d-flex align-items-center'>
          <Home  size={25}/>
          <ChevronRight className='mx-2'  size={20} color='#eee'/>
          <span className=' fs-5'>Add-ons</span>
          </div>

          <div className='pt-3'>
              <p className='fw-600 promptsHeaderBigText'>Nyxil Studio Add-ons</p>
              <p className='text-light-emphasis promptsHeadersmallText'>Supercharged tips, resources & tools to benefit Nyxil Studio Product Line Experience.</p>
          </div>
      </div>
          <div className='pt-5 pb-5 promptsHeaderContainer' style={{background:'#F9FAFB'}}>
                <Row>
                <Col xl={3} md={6} sm={12} ><AddOnsCard/></Col>
                  <Col xl={3} md={6} sm={12}><AddOnsCard/></Col>
                  <Col xl={3} md={6} sm={12}><AddOnsCard/></Col>
                  <Col  xl={3} md={6} sm={12}><AddOnsCard/></Col>
                </Row>
                <Row>
                  <Col xl={3} md={6} sm={12} ><AddOnsCard/></Col>
                  <Col xl={3} md={6} sm={12}><AddOnsCard/></Col>
                  <Col xl={3} md={6} sm={12}><AddOnsCard/></Col>
                  <Col  xl={3} md={6} sm={12}><AddOnsCard/></Col>
                </Row>
              </div>
    </>
  )
}

export default AddOns;