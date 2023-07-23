import React from 'react'
import {  Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import {  Bookmark} from 'react-feather'

function SavePromptCard({prompts}) {
  return (
    <>
         {prompts.slice(0,500).map((e,i)=>{
              return(
                <Col key={e.id} xl={3} sm={12} md={6}> 
                          <div className='p-4 mb-3 mt-4' style={{border:'1px solid #eee',background:'#fff', borderRadius:'12px'}}>
                              <div>
                                <h2>{e.icon}</h2>
                              {React.createElement('h2', { dangerouslySetInnerHTML:{ __html:e.emojis }}, null) }
                              </div>
                               <div> <Link to={`/prompt/${e.category.toLocaleLowerCase()}/${e.topic.toLocaleLowerCase().split(" ").join("-")}`} 
                               className='text-decoration-none text-light-emphasis'><h5> {e.topic}</h5></Link> </div>                          
                            <div>
                              <p className='fs-6 text-light-emphasis'> {e.description}</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-between pt-3'>
                            <div className='mx-2 px-3' style={{background:'#EAECF0',padding:'5px',fontSize:'12px',  borderRadius:'15px'}}>
                             {e.category}</div>
                            <div  style={{cursor:'pointer'}}><Bookmark size={20} color='red' /> <span className='text-light-emphasis' >{e.countnumber}</span></div>                           
                        </div>
            </div>
        </Col>
      )
    })}
    </>
  )
}

export default SavePromptCard