import React from 'react'
import { ChevronRight, Home } from 'react-feather'
import PackCard from './PackCard'
import { Row,Col } from 'react-bootstrap'

function PromptPack() {
  return (
    <>
<div className='p-5'>
    <div className='breadcru d-flex align-items-center'>
    <Home  size={30}/>
    <ChevronRight  size={30} color='#eee'/>
    <span className='fw-600 fs-4'>Sintra Prompt Packs</span>
    </div>

    <div className='pt-4'>
        <p className='fw-600' style={{fontSize:'70px'}}>Sintra Prompt Packs</p>
        <p className='fs-4 text-light-emphasis'>Proven & tested ready-made prompt packs for you to copy & paste into your work.</p>
    </div>
</div>
<div className='pt-5 pb-5 px-5' style={{background:'#F9FAFB'}}>
       <Row>
        <Col><PackCard/></Col>
        <Col><PackCard/></Col>
        <Col><PackCard/></Col>
        <Col><PackCard/></Col>
       </Row>
       <Row>
        <Col><PackCard/></Col>
        <Col><PackCard/></Col>
        <Col><PackCard/></Col>
        <Col><PackCard/></Col>
       </Row>
    </div>
    </>
  )
}

export default PromptPack