import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { ArrowUp,ChevronRight, Bookmark, Home, Link as LinkIcon, ArrowUpRight, ArrowLeft } from 'react-feather'
import { Link } from 'react-router-dom'
import PromptCard from './PromptCard'

function Prompt() {

  const prompts = [
    {
        title:'Generating Backend Keywords',
        category:'Business',
        icon:'🔑',
        likes:'1',
        id:1
 },
{
    title:'Automating Instagram Growth',
    category:'Business',
    likes:'12',
    icon:'📈',
    id:2
},
{
    title:'Developing a Brand Voice and Tone Guide',
    category:'Business',
    likes:'3',
    icon:'🔨',
    id:3
}
]

  return (
    <>
      <div className='promptsHeaderContainer'>
        <div className='breadcru d-flex align-items-center'>
        <Home  size={25}/>
        <ChevronRight className='mx-2'  size={20} color='#eee'/>
        <Link to='#' className='text-decoration-none' style={{color:'#333'}}><span className=' fs-6 fw-600'>Prompts</span></Link>
        <ChevronRight className='mx-2'  size={20} color='#eee'/>
        <Link to='#' className='text-decoration-none' style={{color:'#333'}}><span className=' fs-6 fw-600 '>Business</span></Link>
        </div>
        <Row className='pb-4'>
          <Col xl={7} className='mb-3'>
          <div className='pt-3'>
            <p className='fw-600' style={{fontSize:'35px'}}>👨‍💻 Becoming An Expert In ChatGPT</p>
            <p className='text-light-emphasis' style={{fontSize:'17px'}}>ChatGPT is like a personal DJ, but instead of playing music, it spins words like 
            a pro! With ChatGPT's language skills, you'll be able to craft the perfect sentence, write a killer proposal and even analyze
             your competition like a boss. It's like having your own personal Snoop Dogg, but instead of rapping, it's typing, and instead 
             of saying "fo shizzle" it's saying "excellent work!"</p>
             <div className='d-flex'>
             <span className='mx-2 px-3' style={{background:'#EAECF0',padding:'5px',fontSize:'14px',  borderRadius:'15px'}}>
             <Link to='/#' style={{color:'#5D57D9',}} className='text-decoration-none fw-600'>Business</Link>
             </span>
             <span className='mx-2 px-3' style={{background:'#5D57D9',padding:'5px',fontSize:'14px',  borderRadius:'15px'}}>
             <Link to='/#' style={{color:'#5D57D9',}} className='text-decoration-none text-light fw-600'>Business Pack💸</Link>
             </span>
             <span className=' loginleftside mx-2 px-3 text-ligt-emphasis  fw-600' style={{background:'#EAECF0',padding:'5px',fontSize:'14px',  borderRadius:'15px'}}>
             💸 Nyxil Studio
             </span>                       
             </div> 
        </div>
          </Col>
          <Col>
        <div className='d-flex float-end'>
        <div className='p-2  text-center' style={{border:'1px solid #eee',cursor:'pointer',width:'30%',height:'50px',borderRadius:'11px',}}>
             <LinkIcon size={20} className='' />
          </div> 
          <div className='p-2  text-center w-25 mx-2' style={{border:'1px solid #eee',cursor:'pointer',width:'30%',height:'50px',borderRadius:'11px',}}>
             <Bookmark size={20}/>
          </div> 
          <div className='p-2 px-4 fw-600 text-light' style={{border:'1px solid #eee',cursor:'pointer',background:'#5D57D9',borderRadius:'11px',
              width:'180px',height:'45px'
        }}>
             <ArrowUp size={20} /> Upwork
          </div>  
        </div>
            
          </Col>
        </Row>
    </div>
    <div className='' style={{background:'#F9FAFB',paddingTop:'70px'}}> 
         <Row className='pb-4 promptsHeaderContainer pb-5 w-100'>
          <Col lg={4} className='p-4'>
            <div>
              <h4>Prompts</h4>
              <div>
                <p className='' > Copy a prompt, replace placeholders with relevant text, and paste it at 
                  <a href='www.chatgpt.co' className='text-decoration-none'> ChatGPT </a>
                   for an efficient and streamlined experience.</p>
              </div>
              <div className='pt-2 pb-2 px-3 text-center mt-4 fw-600 fs-6 '
                style={{border:'1px solid #d0d5dd',backgroundColor:'#fff',borderRadius:'10px',width:'80%'}}> 
                Open ChatGPT <ArrowUpRight  size={20}/>
             </div>
            </div>
          </Col>
          <Col lg={8}>
            <div className='bg-white p-5 text-center leftPackTitle' style={{borderRadius:'12px'}}>
          <h4> Locked content access</h4>
          <p>You need to buy the Nyxil Studio Prompt Pack or Nyxil Studio Plus in order to see these Prompts.</p>
         <div>
          <Row className='justify-content-center'>
            <Col xl={4}>
            <button className='btn mb-2'  
          style={{border:'1px solid #d0d5dd',backgroundColor:'#fff',borderRadius:'10px',fontWeight:'600'}}> 
           Buy Prompt Pack</button>
            </Col>

            <Col xl={4}>
            <button className='btn '  
          style={{border:'1px solid #FEC84B',backgroundColor:'#FEC84B',borderRadius:'10px',fontWeight:'600'}}> 
          Unlock with Nyxil  Plus</button> 
            </Col>
          </Row>
          
         </div>

          
            </div>
          </Col>
        </Row>
    <div className='px-5'><hr  style={{color:'gray'}}/></div>
        <Row className='pb-5 promptsHeaderContainer w-100 mt-5'>
          <Col xl={4} className='p-4'>
            <div>
              <h4>Tips</h4>
              <div>
                <p className='' > Follow these guidelines to maximize your experience and unlock the full potential of your conversations with
                  <a href='www.chatgpt.co' className=' fw-600 text-decoration-none'> ChatGPT </a></p>
              </div>
            </div>
          </Col>
          <Col>
            <div className='bg-white p-5 text-center leftPackTitle' style={{borderRadius:'12px'}}>
          <h4> Locked content access</h4>
          <p>You need to buy the Nyxil Studio Prompt Pack or Nyxil Studio Plus in order to see these Prompts.</p>
         <div>
          <Row className='justify-content-center'>
            <Col xl={4}>
            <button className='btn text-white '  
          style={{border:'1px solid #6042EC',backgroundColor:'#6042EC',borderRadius:'10px',fontWeight:'600'}}> 
          Sign up</button> 
            </Col>
          </Row>
          
         </div>
            </div>
          </Col>
        </Row>

        <div className='px-5'><hr  style={{color:'gray'}}/></div>
        <Row className='promptsHeaderContainer w-100 mt-5'>
          <Col xl={4} className='p-4'>
            <div>
              <h4>Similar Prompts</h4>
              <div>
                <p className='' > Discover related prompts to expand your productivity. Seamlessly connecting with ChatGPT for endless conversation possibilities.              <a href='www.chatgpt.co' className=' fw-600 text-decoration-none'> ChatGPT </a></p>
              </div>
              <div className='pt-2 pb-2 px-3 text-center mt-4 fw-600 fs-6 loginleftside'
                style={{border:'1px solid #d0d5dd',backgroundColor:'#fff',borderRadius:'10px',width:'80%'}}> 
                View all Prompts
             </div>
             <div className='pt-2 pb-2 px-3 text-center mt-2 fw-600 fs-6 loginleftside'
                style={{border:'1px solid #d0d5dd',backgroundColor:'#fff',borderRadius:'10px',width:'80%'}}> 
               <ArrowLeft /> Back to Business
             </div>
            </div>
          </Col>
          <Col>
          <Row><PromptCard prompts={prompts}/></Row>
          </Col>
        </Row>

    </div>
        
        
    </>
  )
}

export default Prompt