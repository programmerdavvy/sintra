import React from 'react'
import { Col, Row } from 'reactstrap'
import SubcribedPromptCard from './SubcribedPromptCard'
import { Link } from 'react-router-dom'

function Purchases({purchasedPrompts}) {

  const purchasedPromptsIcons = [
    {
       
        icon:'💻',
        id:1
 },
{
    icon:'💬',
    id:2
},
{
    icon:'🚀',
    id:3
},
{
  
    icon:'💰',
    id:4
},
{
   
    icon:'🏠',
    id:5
},
{
   
    icon:'✔️',
    id:6
},
{
   
    icon:'🤝',
    id:7
},
{
   
  icon:'✍🏼',
  id:8
},{
   
  icon:'💸',
  id:9
},
{
   
  icon:'✍️',
  id:10
},{
   
  icon:'🏌️',
  id:11
},{
   
  icon:'🤖',
  id:12
},
]
  return (
    <>
  <div className='pt-3'>
      <Row className=''>
        <Col xl={3} sm={12} md={12}>
        <div className='Nyxil Studio -packs' style={{width:'80%'}}>
        <h4 className='fw-600 pb-3 pt-3'>Nyxil Studio Packs</h4>
         <p className='fs-6 text-lignt-emphasis pb-4'> Here you can see all Nyxil Studio Prompt Packs you've purchased or got access to.</p> 
        </div>
        </Col>
        <Col>
        <Row className='pb-4'><SubcribedPromptCard purchasedPromptsIcons={purchasedPromptsIcons} purchasedPrompts={purchasedPrompts}/></Row>
        {purchasedPrompts.length >= 1 && (<Col xl={6} sm={12} md={6}> 
              <div className='p-4 mb-2 ' style={{border:'1px solid #eee',background:'#3A46D6', height:'160px', borderRadius:'12px'}}>
                              <div className='d-flex justify-content-between'>
                                <h2>{'🏆 '}</h2>
                                <div>
                                <span className='mx-2 px-3 fw-600' style={{background:'#ecfdf3',padding:'5px',fontSize:'12px', color:'#187A48', borderRadius:'15px'}}>Purchased</span>

                                </div>
                              </div>
                               <div> <Link to='/prompts' 
                               className='text-decoration-none text-light'><h5>The Complete Nyxil Studio Prompt Pack Bundle 🏆 </h5></Link> </div>                          
                            
                            <div className='d-flex align-items-center justify-content-between pt-3'>
                            {/* <div className='mx-2 px-3' style={{background:'#EAECF0',padding:'5px',fontSize:'12px',  borderRadius:'15px'}}>💸 {e.category}</div> */}
                        </div>
            </div>
        </Col>) }
        
        </Col>
      </Row>
       <hr color='#eee'/>
       <Row className=''>
        <Col xl={3} sm={12} md={12}>
        <div className='Nyxil Studio -packs' style={{width:'80%'}}>
        <h4 className='fw-600 pb-3 pt-3'>Nyxil Studio Bots</h4>
         <p className='fs-6 text-lignt-emphasis pb-4'>Here you can see all Nyxil Studio Bots which you've purchased or got access to.</p> 
        </div>
        </Col>
        <Col>
        <Row></Row>
        </Col>
      </Row>
       <hr color='#eee'/>
       <Row className=''>
        <Col xl={3} sm={12} md={12}>
        <div className='Nyxil Studio -packs' style={{width:'80%'}}>
        <h4 className='fw-600 pb-3 pt-3'>Nyxil StudioAdd-ons</h4>
         <p className='fs-6 text-lignt-emphasis pb-4'>Here you can see all Nyxil Studio Bots which you've purchased or got access to.</p> 
        </div>
        </Col>
        <Col>
        <Row></Row>
        </Col>
      </Row>
      </div>
    </>
    

  )
}

export default Purchases