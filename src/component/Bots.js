import React from 'react'
import { ChevronRight, Home } from 'react-feather'
import BotsCard from './BotCard'
import { Row,Col } from 'react-bootstrap';


function Bots() {

  return (
    <>
      <div className='promptsHeaderContainer'>
          <div className='breadcru d-flex align-items-center'>
          <Home  size={25}/>
          <ChevronRight className='mx-2'  size={20} color='#eee'/>
          <span className=' fs-5'>Nyxil Studio Bots</span>
          </div>

          <div className='pt-3'>
              <p className='fw-600 promptsHeaderBigText'>Nyxil Studio Bots</p>
              <p className='text-light-emphasis promptsHeadersmallText'>Proven & tested ready-made Bots for you to copy & paste into your daily work routine.</p>
          </div>
      </div>
          <div className='pt-5 pb-5 promptsHeaderContainer' style={{background:'#F9FAFB'}}>
                <Row>
                  <Col xl={3} md={6} sm={12}><BotsCard/></Col>
                  <Col xl={3} md={6} sm={12}><BotsCard/></Col>
                  <Col xl={3} md={6} sm={12}><BotsCard/></Col>
                  <Col xl={3} md={6} sm={12}><BotsCard/></Col>
                </Row>
                <Row>
                  <Col xl={3} md={6} sm={12}><BotsCard/></Col>
                  <Col xl={3} md={6} sm={12}><BotsCard/></Col>
                  <Col xl={3} md={6} sm={12}><BotsCard/></Col>
                  <Col xl={3} md={6} sm={12}><BotsCard/></Col>
                </Row>
              </div>
    </>
  )
}

export default Bots;