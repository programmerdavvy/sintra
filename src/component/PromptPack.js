import React from 'react'
import { ChevronRight, Home } from 'react-feather'
import PackCard from './PackCard'
import { Row,Col } from 'react-bootstrap'

function PromptPack() {
  return (
    <>
<div className='promptsHeaderContainer'>
    <div className='breadcru d-flex align-items-center'>
    <Home  size={25}/>
    <ChevronRight className='mx-2'  size={20} color='#eee'/>
    <span className=' fs-5'>Nyxil Studio Prompt Packs</span>
    </div>

    <div className='pt-3'>
        <p className='fw-600 promptsHeaderBigText'>Nyxil Studio Prompt Packs</p>
        <p className='text-light-emphasis promptsHeadersmallText'>Proven & tested ready-made prompt packs for you to copy & paste into your work.</p>
    </div>
</div>
    <div className='pt-5 pb-5 promptsPackCard' style={{background:'#F9FAFB'}}>
       <Row>
       <Col xl={3} md={6} sm={12}><PackCard/></Col>
        <Col xl={3} md={6} sm={12}><PackCard/></Col>
        <Col xl={3} md={6}  sm={12}><PackCard/></Col>
        <Col  xl={3} md={6} sm={12}><PackCard/></Col>
       </Row>
       <Row>
       <Col xl={3} md={6} sm={12}><PackCard/></Col>
        <Col xl={3} md={6} sm={12}><PackCard/></Col>
        <Col xl={3} md={6}  sm={12}><PackCard/></Col>
        <Col  xl={3} md={6} sm={12}><PackCard/></Col>
       </Row>
    </div>
    </>
  )
}

export default PromptPack