import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ArrowUp,ChevronRight, Bookmark, Home, Link as LinkIcon, ArrowUpRight, ArrowLeft, Info } from 'react-feather'
import { Link, useParams } from 'react-router-dom'
import PromptCard from './PromptCard'
import { request } from '../services/utilities'
import SSRStorage from '../services/storage'
import { USER_COOKIE } from '../services/constants'
import { Spinner } from 'reactstrap'
const storage = new SSRStorage();


function Prompt() {
const [promptQuestion,setPromptQuestion] = useState([]);
const [error,setError] =  useState('');
const [user,setUser] =  useState('');
const [loading,setLoading] = useState(false);

const params = useParams();
  const prompts = [
    {
        topic:'Generating Backend Keywords',
        category:'Business',
        description:'Looking to write or 25 Templates For SEO Optimization but dont know where to start? ChatGPT can help! …',
        icon:'🔑',
        likes:'1',
        id:1
 },
{
  topic:'Automating Instagram Growth',
    category:'Business',
    description:'Looking to write or 25 Templates For SEO Optimization but dont know where to start? ChatGPT can help! …',
    likes:'12',
    icon:'📈',
    id:2
},
{
  topic:'Developing a Brand Voice and Tone Guide',
    category:'Business',
    likes:'3',
    description:'Looking to write or 25 Templates For SEO Optimization but dont know where to start? ChatGPT can help! …',
    icon:'🔨',
    id:3
}
]

const fetchPromptQuestions = async () =>{
  setLoading(true)
  const user =  await storage.getItem(USER_COOKIE);
  setUser(user ? user[0].accesskey : '');
  const url = `getPrompts?category=${params.category}&topic=${params.title.toLocaleLowerCase().split("-").join(" ")}&accesskey=${user ? user[0].accesskey : ''}`;
  try{
  const rs = await request(url,'GET',false);
  setPromptQuestion(rs);
  setLoading(false)

  }catch(err){
    console.log(err)
    setLoading(false)
    setError(err.message.Message)
    console.log(err.message.Message, 'err');
  }
}
useEffect(()=>{
  fetchPromptQuestions();
},[])
  return (
    <>
    {loading &&<Spinner color='primary' style={{position:'absolute',top:'70%',left:'48%'}}/>}
      <div className='promptsHeaderContainer'>
        <div className='breadcru d-flex align-items-center'>
        <Home  size={25}/>
        <ChevronRight className='mx-2'  size={20} color='#eee'/>
        <Link to='#' className='text-decoration-none' style={{color:'#333'}}><span className=' fs-6 fw-600'>Prompts</span></Link>
        <ChevronRight className='mx-2'  size={20} color='#eee'/>
        <Link to='#' className='text-decoration-none text-capitalize' style={{color:'#333'}}><span className=' fs-6 fw-600 '>{params.category}</span></Link>
        </div>
        <Row className='pb-4'>
          <Col xl={7} className='mb-3'>
          <div className='pt-3'>
            <p className='fw-600 text-capitalize' style={{fontSize:'35px'}}>👨‍💻  {params.title.split("-").join(" ")}</p>
            <p className='text-light-emphasis' style={{fontSize:'17px'}}>{params.description.split("-").join(" ")}"</p>
             <div className='d-flex'>
             <span className='mx-2 px-3 text-capitalize' style={{background:'#EAECF0',padding:'5px',fontSize:'14px',  borderRadius:'15px'}}>
             <Link to='/#' style={{color:'#5D57D9',}} className='text-decoration-none fw-600'>{params.category}</Link>
             </span>
             <span className='mx-2 px-3' style={{background:'#5D57D9',padding:'5px',fontSize:'14px',  borderRadius:'15px'}}>
             <Link to='/#' style={{color:'#5D57D9',}} className='text-decoration-none text-light fw-600 text-capitalize'>{params.category} Pack💸</Link>
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
             <a href='https://chat.openai.com' target='_blank' className='text-decoration-none text-dark'>
             <div className='pt-2 pb-2 px-3 text-center mt-4 fw-600 fs-6 '
                style={{border:'1px solid #d0d5dd',backgroundColor:'#fff',borderRadius:'10px',width:'80%'}}> 
                Open ChatGPT <ArrowUpRight  size={20}/>
             </div>
             </a>
            </div>
          </Col>
          <Col lg={8}>
            {error?<div className='bg-white p-5 text-center leftPackTitle' style={{borderRadius:'12px'}}>
            <h4> Locked content access</h4>
            <p>You need to buy the Nyxil Studio Prompt Pack in order to see these Prompts.</p>
            <div>
            <Row className='justify-content-center'>
              <Col xl={4}>
             <Link to="/prompt-packs" className='text-decoration-none  text-dark '> <button className='btn mb-2'  
            style={{border:'1px solid #d0d5dd',backgroundColor:'#fff',borderRadius:'10px',fontWeight:'600'}}> 
            Buy Prompt Pack</button></Link>
              </Col>

              <Col xl={4}>
              <button className='btn '  
            style={{border:'1px solid #FEC84B',backgroundColor:'#FEC84B',borderRadius:'10px',fontWeight:'600'}}> 
            Unlock with Nyxil  Max</button> 
              </Col>
            </Row>
          </div>
            </div>:<div> {promptQuestion.map((e,i)=>{
              return(
          <div key={i} className='mb-3'>
           <div className=' pb-4 p-3 d-flex text-white justify-content-between ' style={{background:'#1D2939',borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}>
              <div><p className='fw-600' style={{fontSize:'17px'}}>Prompt #{i+1}</p></div>
              <div className=''>               
                <button onClick={()=>{
                  let btncopy = document.getElementById(`btncopy${i}`)
                  navigator.clipboard.writeText(e.prompts)
                  btncopy.innerHTML = 'Copied!'
                  }} className='btn  text-white' style={{border:'1px solid gray',width:'100px'}} id={`btncopy${i}`}> Copy <svg xmlns="http://www.w3.org/2000/svg" width="25%" height="100%" viewBox="0 0 20 20" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                <g clipPath="url(#clip0_6297_420074)">
                <path d="M4.1665 12.4998C3.38993 12.4998 3.00165 12.4998 2.69536 12.373C2.28698 12.2038 1.96253 11.8794 1.79337 11.471C1.6665 11.1647 1.6665 10.7764 1.6665 9.99984V4.33317C1.6665 3.39975
                 1.6665 2.93304 1.84816 2.57652C2.00795 2.26292 2.26292 2.00795 2.57652 1.84816C2.93304 1.6665 3.39975 1.6665 4.33317 1.6665H9.99984C10.7764 1.6665 11.1647 1.6665 11.471 1.79337C11.8794 1.96253 12.2038 2.28698 12.373 2.69536C12.4998 3.00165 12.4998 3.38993 12.4998 4.1665M10.1665 18.3332H15.6665C16.5999 18.3332 17.0666 18.3332 17.4232 18.1515C17.7368 17.9917 17.9917 17.7368 18.1515 17.4232C18.3332 17.0666 18.3332 16.5999 18.3332 15.6665V10.1665C18.3332 9.23308 18.3332 8.76637 18.1515 8.40985C17.9917 8.09625 17.7368 7.84128 17.4232 7.68149C17.0666 7.49984 16.5999 7.49984 15.6665 7.49984H10.1665C9.23308 7.49984 8.76637 7.49984 8.40985 7.68149C8.09625 7.84128 7.84128 8.09625 7.68149 8.40985C7.49984 8.76637 7.49984 9.23308 7.49984 10.1665V15.6665C7.49984 16.5999 7.49984 17.0666 7.68149 17.4232C7.84128 17.7368 8.09625 17.9917 8.40985 18.1515C8.76637 18.3332 9.23308 18.3332 10.1665 18.3332Z" stroke="currentColor" strokeWidth="1.66667" stroke-linecap="round" strokeLinejoin="round"></path>
                </g>
                <defs>
                <clipPath id="clip0_6297_420074">
                <rect width="20" height="20" fill="currentColor"></rect>
                </clipPath>
                </defs>
                </svg>
                </button>
              </div>
            </div>
            <div id='copytext' className='pb-4 p-3  pt-4 p-3 fw-600' style={{background:'#101828',color:'#d0d5dd',borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px'}}>
            "{e.prompts}"
            </div>
           </div>
              )
            })}</div>
            
          }
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
          {promptQuestion.length > 1 ? 
          <Col>
          <div className='bg-white px-3 pt-3 p-2 mb-3' style={{border:'1px solid #eee',borderRadius:"12px"}}>
            <p className='fs-6 text-ligt-emphasis '>
            <Info size={20} className='mx-2'/>
              If possible, provide examples of similar campaigns that you like or want to emulate.</p>
          </div>
          <div className='bg-white px-3 pt-3 p-2 mb-3' style={{border:'1px solid #eee',borderRadius:"12px"}}>
            <p className='fs-6 text-ligt-emphasis '>
            <Info size={20} className='mx-2'/>
            Give a clear deadline for the campaign and any deliverables you expect from the influencer.</p>
          </div>
          </Col>
          :
           <Col>
            <div className='bg-white p-5 text-center leftPackTitle' style={{borderRadius:'12px'}}>
          <h4> Locked content access</h4>
          <p>You need to buy the Nyxil Studio Prompt Pack in order to see these Prompts.</p>
         <div>
          {user?  <Row className='justify-content-center'>
              <Col xl={4}>
              <Link to="/prompt-packs" className='text-decoration-none  text-dark '> <button className='btn mb-2'  
            style={{border:'1px solid #d0d5dd',backgroundColor:'#fff',borderRadius:'10px',fontWeight:'600'}}> 
            Buy Prompt Pack</button></Link>
              </Col>

              <Col xl={4}>
              <button className='btn '  
            style={{border:'1px solid #FEC84B',backgroundColor:'#FEC84B',borderRadius:'10px',fontWeight:'600'}}> 
            Unlock with Nyxil  Max</button> 
              </Col>
            </Row>:<Row className='justify-content-center'>
            <Col xl={4}>
            <button className='btn text-white'  
          style={{border:'1px solid #6042EC',backgroundColor:'#6042EC',borderRadius:'10px',fontWeight:'600'}}> 
          <Link to="/signup" className='text-decoration-none text-white'>Sign up</Link></button> 
            </Col>
          </Row>}
          
         </div>
            </div>
          </Col>}
         
         
        </Row>

        <div className='px-5'><hr  style={{color:'gray'}}/></div>
        <Row className='promptsHeaderContainer w-100 mt-5'>
          <Col xl={4} className='p-4'>
            <div>
              <h4>Similar Prompts</h4>
              <div>
                <p className='' > Discover related prompts to expand your productivity. Seamlessly connecting with ChatGPT for endless conversation possibilities.              <a href='www.chatgpt.co' className=' fw-600 text-decoration-none'> ChatGPT </a></p>
              </div>
              <Link to="/prompts" className='text-decoration-none text-dark'>
                <div className='pt-2 pb-2 px-3 text-center mt-4 fw-600 fs-6 loginleftside'
                style={{border:'1px solid #d0d5dd',backgroundColor:'#fff',borderRadius:'10px',width:'80%'}}> 
                View all Prompts
             </div></Link>
              
            <Link to="/prompts" className='text-decoration-none text-dark'> <div className='pt-2 pb-2 px-3 text-center mt-2 fw-600 fs-6 loginleftside'
                style={{border:'1px solid #d0d5dd',backgroundColor:'#fff',borderRadius:'10px',width:'80%'}}> 
               <ArrowLeft /> Back to Business
             </div></Link>
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