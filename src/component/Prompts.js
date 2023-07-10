import React, { useEffect, useState } from 'react'
import { Row,Col, Form,DropdownButton,Dropdown } from 'react-bootstrap';
import {  ArrowDown, ArrowUp, ChevronRight, Home, Search ,X} from 'react-feather'
import { Link } from 'react-router-dom';
import { Button, Input, Modal, ModalBody, ModalHeader } from 'reactstrap';
import PromptCard from './PromptCard';
import {request} from '../services/utilities';


function Prompts() {
    const [packs] = useState([]);
    const [count,setCount] = useState(0);
    const [showmodal,setShowmodal] = useState(false);
   const [categories,setCategories]= useState([]);

   const fetchCategories = async () =>{
    const url = `GetCategory`;
    try{
        const rs = await request(url,'GET',false);
        setCategories(rs);
    }catch(err){
        console.log(err); 
    }
   }
    const handleAddPack = (e,c) =>{
        let checkbox = document.getElementById(c);
        let item = packs.find(a => a?.id === e.id);
        console.log(checkbox,checkbox.checked,item)
 
        if(checkbox.checked === true){ 
            if(!item){ 
                packs.push(e);  
                setCount(count+1);
            }    
        }
        if(checkbox.checked === false && item){
                packs.splice(item,1);    
                setCount(count-1);

            
        }
        
    }
    const sidebarMenu = [
        {
            title:'Agency',
            id:1
        },
        {
            title:'Assistants',
            id:2
        },
        {
            title:'Business',
            id:3
        },
        {
            title:'Copywriting',
            id:4
        },
        {
            title:'HR',
            id:5
        },
        {
            title:'Marketing',
            id:1
        },
        {
            title:'Productivity',
            id:1
        },
        {
            title:'Real Estate',
            id:1
        },
        {
            title:'Sales',
            id:1
        },
        {
            title:'Startups',
            id:1
        },
        {
            title:'Support',
            id:1
        },
        {
            title:'Web Development',
            id:1
        },
    ]
    const prompts = [
        {
            title:'Becoming an expert in Chatgpt',
            category:'Business',
            icon:'👨‍💻',
            likes:'12',
            id:1
     },
    {
        title:'Automating Instagram Growth',
        category:'Marketing',
        likes:'12',
        icon:'📈',
        id:2
    },
    {
        title:'Developing a Brand Voice and Tone Guide',
        category:'Marketing',
        likes:'12',
        icon:'🔨',
        id:3
    },
    {
        title:'Conducting market research for new leads',
        category:'Sales',
        likes:'22',
        icon:'🔬',
        id:4
    },
    {
        title:'Analyzing Your Competition',
        category:'Business',
        icon:'💥',
        likes:'2',
        id:5
    },
    {
        title:'Generating Instagram caption ideas',
        category:'Assistants',
        icon:'🧢',
        likes:'5',
        id:6
    },
    {
        title:'Writing marketing emails',
        category:'Real Estate',
        icon:'✉️',
        likes:'12',
        id:6
    },
    ]

    useEffect(()=>{
        fetchCategories();
    },[]);

  return (
    <>
    <div className='promptsHeaderContainer'>
        <div className='breadcru d-flex align-items-center'>
        <Home  size={25}/>
        <ChevronRight className='mx-2'  size={20} color='#eee'/>
        <Link to='#' className='text-decoration-none' style={{color:'#5D57D9'}}><span className=' fs-5 '>Prompts</span></Link>
        </div>

        <div className='pt-3'>
            <p className='fw-600 promptsHeaderBigText'>All Prompts</p>
            <p className='text-light-emphasis promptsHeadersmallText'>Explore All Community & Nyxil Studio AI posted AI Prompts.</p>
        </div>
    </div>
    <div style={{background:'#F9FAFB'}}>
    <div className='d-flex w-100'>
        <div  className='col-sm-3-l filterSide'>
         <div className='nav-scroll pt-5'>
         <div className='sidebar d-flex justify-content-between align-items-center'>
           <div><h2>Filters</h2></div>
            <div><span className='text-light-emphasis fw-600 fs-6'>Clear all</span></div>
           </div>
            <div className='mt-5 d-none fw-600 fs-6  d-flex justify-content-between' style={{borderRadius:'10px',padding:'12px',background:'#EAECF0'}}> Nyxil Studio Prompts 
            <Form className='mx-2'> 
            <Form.Check 
                type="switch"
                id="custom-switch"
                disabled
            />
    
         </Form>           
     </div>
        <div className='pt-2 d-none pb-2 px-3 text-center mt-4 fw-600 fs-6 '
            style={{border:'1px solid #d0d5dd',backgroundColor:'#fff',borderRadius:'10px'}}> 
            Saved Prompts  <span style={{background:'#f2f4f7',padding:'12px',}} className='rounded-circle mx-3 p-1 '> 0</span>
        </div>
        <hr />
        <div className='pt-2'>
            <h5>Categories</h5>
        </div>
        <div>
        <div>
            <Link to='#' style={{color:'#5D57D9'}} className='text-decoration-none fw-600 fs-6'>All</Link>
        </div>
        {categories.map((e)=>{
            return(
                <div className='mt-2' key={e.category}>
                    <Link to='#' style={{color:'#667180'}} className='text-light-emphasis  text-decoration-none fw-600 fs-6'>{e.category}</Link>
                </div>
            )
        })}
        <hr/>
            <div className='pt-2 pb-3'>
                <h5>Nyxil Studio Packs</h5>
            </div>
           <div>
            
            {categories.map(e=>{
                return(
                    <div className='px-3 pb-2' key={e.category}>
                    <Input type='checkbox' style={{borderRadius:'0.375rem'}} onClick={()=>handleAddPack(e,`checkbox-${e.category}`)} name={e.category} id={`checkbox-${e.category}`} className='sidebar-checkbox-icon'/>
                     <Link to='/#' className='text-light-emphasis text-decoration-none fw-600 fs-6'>{e.category} Packs 🏌️</Link>
                </div>
                )
            })}
           </div>
        </div>
         </div>
        </div>
        <div className='col-md-12-l' >
           <div className='searchHeader'>
            <div className='search-header'>
                <Row className='w-100 align-items-center'>
                    <Col xl={7} md={12} sm={12}>
                        <div>
                            <div className='input pb-2 d-flex'>
                                <div className='searchIcon' style={{background:'#fff'}}><Search  size={20}/></div>
                                <input name='search' className='input'
                                    style={{borderLeft:'none'}}
                                maxLength='256' placeholder='Search for Prompt' id='input search-bar'/>
                            </div>
                            
                        </div>
                    </Col>
                    <Col xl={4} md={6} xs={6} className='' id='searchwfsm'> 
                        <div>
                        <div style={{fontSize:'14px'}} className='loginleftside text-light-emphasis'>Showing 0 of 2434 Prompts</div>
                         </div>
                    </Col>
                    <Col xl={1} md={6} xs={12}>
                        <div className='large-screen proptslength'>
                            <DropdownButton variant='white' className='fw-600' id="dropdown-basic-button" title="Sort by: Upvotes">
                            <Dropdown.Item href="#/action-1">Upworks</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Name (A - Z)</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Name (Z - A)</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        
                        <div className='small-screen'> 
                        <div className='d-flex'>
                        <button onClick={()=>setShowmodal(true)} className='mx-3 btn fs-6 bg-white' style={{fontWeight:'500',border:'1px solid #eee',width:'100%', borderRadius:'10px'}} > 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="100%" viewBox="0 0 20 20" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                        <path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" stroke-linejoin="round"></path>
                        </svg>  Filters 
                        </button>
                        <Dropdown style={{width:'100%'}}>
                        <Dropdown.Toggle  DropdownButton variant='white' style={{border:'1px solid #eee',width:'100%',fontWeight:'500',borderRadius:'10px'}} 
                            className='bg-white fs-6' id="dropdown-basic">
                                    <ArrowUp size={18} /><ArrowDown size={18} />Saves
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Saves</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Name (A - Z)</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Name (Z - A)</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                        </div>
                        </div>
                    </Col>
                </Row>
                <div className='d-flex d-none'>
                    {packs?.map((e,i)=>{
                        return(
                            <div className='p-2 mt-2 mx-1 bg-white px-3 fw-600' key={i}
                            style={{border:'1px solid #d0d5dd',cursor:'pointer', width:'20%',borderRadius:'10px',
                             fontSize:'14px', boxShadow:'0 1px 2px rgba(16,24,40,.05)'}}
                            > 
                              {e.category}🏌️ <X size={20} color='#667180'/>
                           </div>
                        )
                    })}
                   
                    <div className='p-2 mt-2 mx-2 bg-white px-3 fw-600'
                     style={{border:'1px solid #d0d5dd',width:'20%',borderRadius:'10px', fontSize:'14px', boxShadow:'0 1px 2px rgba(16,24,40,.05)'}}
                     > 
                        Agency Pack 🏌️ <X size={20} color='#667180'/>
                    </div>
                </div>
            </div>
                <Row className=''>
                    <PromptCard prompts={prompts}/>
                </Row>
            </div> 
        </div>
    </div>
    </div>
    <Modal
        isOpen={showmodal}
        toggle={() => setShowmodal(!showmodal)}
        className='modal-dialog-centered'
      >
        <ModalHeader className='bg-transparent' toggle={() => setShowmodal(!showmodal)}>
        Filters
        </ModalHeader>
        <ModalBody className='px-sm-5 mx-50 pb-5'>
          <h1 className='mb-1'></h1>
          <div className='nav-scroll pt-2'>
        <hr />
        <div className='pt-2'>
            <h5>Categories</h5>
        </div>
        <div>
        <div>
            <Link to='#' style={{color:'#5D57D9'}} className='text-decoration-none fw-600 fs-6'>All</Link>
        </div>
        {categories.map((e)=>{
            return(
                <div className='mt-2' key={e.category}>
                    <Link to='#' style={{color:'#667180'}} className='text-light-emphasis  text-decoration-none fw-600 fs-6'>{e.category}</Link>
                </div>
            )
        })}
        <hr/>
            <div className='pt-2 pb-3'>
                <h5>Nyxil Studio Packs</h5>
            </div>
           <div>
            
            {categories.map(e=>{
                return(
                    <div className='px-3 pb-2' key={e.category}>
                    <Input type='checkbox' style={{borderRadius:'0.375rem'}} onClick={()=>handleAddPack(e,`checkbox-${e.category}`)} name={e.category} id={`checkbox-${e.category}`} className='sidebar-checkbox-icon'/>
                     <Link to='/#' className='text-light-emphasis text-decoration-none fw-600 fs-6'>{e.category} Packs 🏌️</Link>
                </div>
                )
            })}
           </div>
        </div>
        <hr/>
        <div>
                  <Button className='w-100 mt-3 fs-6' 
                  style={{padding:'12px',background:'#6042EC',fontWeight:'600',borderRadius:'15px',border:'none'}} >
                    Show 100 Prompts
                    </Button>
                </div>
                <div className='mb-2'>
                  <Button className='w-100  text-dark mt-3 fs-6' 
                    style={{padding:'12px',background:'white',border:'1px solid #eee', fontWeight:'600',borderRadius:'15px'}} >
                        Clear Filters
                    </Button>
                </div>
         </div>
        </ModalBody>
      </Modal>
    </>
  )
}

export default Prompts;