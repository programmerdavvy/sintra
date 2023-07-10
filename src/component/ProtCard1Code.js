import React from 'react'
import { ArrowUp, Bookmark} from 'react-feather'
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';

function PromptCard({prompts}) {
  return (
    <>
    {prompts.map(e=>{
      return(
        <Col key={e.id} xl={4} sm={12}>
        <div className='p-4 mb-3 mt-4' style={{border:'1px solid #eee',background:'#fff',width:'110%',borderRadius:'12px'}}>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex'>
                               <div> <Link to={`/prompt/${e.title.toLocaleLowerCase().split(" ").join("-")}`} className='text-decoration-none text-light-emphasis'><h5>{e.icon} {e.title}</h5></Link> </div>
                                <div className='mx-3 px-2'
                                 style={{background:'#EAECF0',padding:'5px',height:'30px',borderRadius:'12px',fontSize:'12px'}}
                                 >
                                 <Link to='/#' className='text-decoration-none fw-600 text-light-emphasis'>{e.category}</Link>
                                 </div>
                                 <div className='mx-2 px-2'
                                 style={{background:'#5D57D9',padding:'5px',height:'30px',borderRadius:'12px',fontSize:'12px'}}
                                 >
                                 <Link to='/#' className='text-decoration-none fw-600 text-light'>{e.category} Pack💸</Link>
                                 </div>
                            </div>
                            <div>
                               <div className='p-2 rounded' style={{border:'1px solid #eee'}}>
                              <Link to='/#' className='text-decoration-none fw-600 text-light-emphasis'> <ArrowUp size={20}/> 621</Link>
                                </div> 
                            </div>
                        </div>
                        <div className='d-flex justify-content-between pt-3'>
                            <div className='d-flex align-items-center'>
                            <div className='mx-2 px-3' style={{background:'#EAECF0',padding:'5px',fontSize:'12px',  borderRadius:'15px'}}>💸 Nyxil Studio</div>
                            <div style={{cursor:'pointer'}}><Bookmark size={20} color='gray'/></div>
                            </div>
                            <div>
                                <div className='text-light-emphasis' style={{fontSize:'12px'}}>June 1, 2023</div>
                            </div>
                        </div>
            </div>
        </Col>
      )
    })}
   
        
    </>
  )
}

export default PromptCard