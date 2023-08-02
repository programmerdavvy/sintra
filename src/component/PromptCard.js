import React from 'react'
import {  Bookmark} from 'react-feather'
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';

function PromptCard({prompts,handleSavePrompts}) {
  return prompts && [...prompts].slice(0,500).map((e,i)=>{
      return(
        <Col key={i} xl={4} sm={12} md={6}> 
                          <div className='p-4 mb-3 mt-4' style={{border:'1px solid #eee',height:'90%', background:'#fff', borderRadius:'12px'}}>
                          <Link 
                               to={`/prompt/${e.category.toLocaleLowerCase()}/${e.topic.toLocaleLowerCase().split(" ").join("-")}/${e.description.toLocaleLowerCase().split(" ").join("-")}`
                              } 
                               className='text-decoration-none text-light-emphasis'>
                              <h2 dangerouslySetInnerHTML={{__html:e.emojis }}></h2>
                               <h5 className='text-capitalize'> {e.topic}</h5>                          
                            <div>
                              <p className='fs-6 text-light-emphasis'> {e.description.slice(0, 90)}...</p>
                            </div></Link> 
                            <div className='d-flex align-items-center justify-content-between pt-3'>
                            <div className='mx-2 px-3 text-white' style={{background:e.colorcode,padding:'5px',fontSize:'12px',  borderRadius:'15px'}}>
                             {e.category}</div>
                            <div onClick={()=>handleSavePrompts(e.topic,e.category)} style={{cursor:'pointer'}}><Bookmark size={20} color='gray'/> <span className='text-light-emphasis' >{e.countnumber}</span></div>                           
                        </div>
            </div>
        </Col>
      )
    })
}
 
export default PromptCard