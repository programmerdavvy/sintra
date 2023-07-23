import React from 'react'
import {  Bookmark} from 'react-feather'
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';

function SubcribedPromptCard({purchasedPrompts,purchasedPromptsIcons}) {
  const displayIcon = purchasedPromptsIcons.map(x=>{
    return(
      <h2>{x.icon}</h2>
    )
  })
  return (
    <>
    {purchasedPrompts.map((e,i)=>{
          return(
            <Col key={e.id} xl={6} sm={12} md={6}> 
            <div className='p-4 mb-2 mt-2' style={{border:'1px solid #eee',background:'#fff', height:'160px', borderRadius:'12px'}}>
                                  <div className='d-flex justify-content-between'>
                                    {displayIcon[i]}
                                    <div>
                                    <span className='mx-2 px-3 fw-600' style={{background:'#ecfdf3',padding:'5px',fontSize:'12px', color:'#187A48', borderRadius:'15px'}}>Purchased</span>
    
                                    </div>
                                  </div>
                                   <div> <Link to='/prompts' 
                                   className='text-decoration-none text-light-emphasis'><h5> Ultimate ChatGPT {e.packs_category} Prompt Pack </h5></Link> </div>                          
                                
                                <div className='d-flex align-items-center justify-content-between pt-3'>
                            </div>
                </div>
            </Col>
          )
        })}
       
    </>
  )
}

export default SubcribedPromptCard;