import React from 'react'
import {  Bookmark} from 'react-feather'
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';

function PromptCard({prompts}) {
  return (
    <>
    {prompts.map(e=>{
      return(
        <Col key={e.id} xl={4} sm={12} md={6}> 
        <div className='p-4 mb-3 mt-4' style={{border:'1px solid #eee',background:'#fff', borderRadius:'12px'}}>
                              <div>
                                <h2>{e.icon}</h2>
                              </div>
                               <div> <Link to={`/prompt/${e.title.toLocaleLowerCase().split(" ").join("-")}`} 
                               className='text-decoration-none text-light-emphasis'><h5> {e.title}</h5></Link> </div>                          
                            
                            <div className='d-flex align-items-center justify-content-between pt-3'>
                            <div className='mx-2 px-3' style={{background:'#EAECF0',padding:'5px',fontSize:'12px',  borderRadius:'15px'}}>💸 {e.category}</div>
                            <div style={{cursor:'pointer'}}><Bookmark size={20} color='gray'/> <span className='text-light-emphasis' >{e.likes}</span></div>                           
                        </div>
            </div>
        </Col>
      )
    })}
   
        
    </>
  )
}

export default PromptCard