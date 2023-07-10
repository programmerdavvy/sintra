import React from 'react'
import { Link } from 'react-router-dom';

function WelcomeMessage() {
  return (  
    <>
    <div className='text-center promptsHeaderContainer  align-items-center mt-5'>
  <div>
    <div className=''>
        <button style={{borderRadius:'12px', background:'#f2f4f7',color:'#6042EC',fontSize:'14px',fontWeight:'600'}}  className='btn updateBadge'>Update</button>
    </div>
    <div>
        <h1 className='promptsHeaderBigText' style={{fontWeight:700}}>Welcome to new Nyxil Studio Hub</h1>
    </div>
    <div>
        <p className='promptsHeadersmallText text-light-emphasis pt-2'>We're happy to announce that we're transitioning from <br/>Nyxil Studio Hub to all-in-one platform Nyxil Studio AI.</p>
    </div>
    <div className='groupbtnwelcome d-flex justify-content-center align-items-center'>
        <div className='mb-4'><Link to="/login"  className=' fs-6 btn text-white' style={{borderRadius:'12px', padding:'12px',fontWeight:'600',background:'#4943c4'}}>Log In
         <span className='text-dark-500 rounded mx-2 ' style={{backgroundColor:'#ECFDF3',fontSize:'12px',color:'grey',padding:'3px'}}> for exciting users</span>
         </Link></div>
       <div  className='mb-4'>
         <Link to='/signup' className='text-decoration-none text-dark mx-3'  style={{border:'1px solid #eee',borderRadius:'10px',
         fontWeight:'600',padding:'13px'}}> 
        Sign up</Link></div>
    </div>
    <p className='opacity-50 fs-6'>
    Your account, purchased accesses, details and <br/> passwords stays the same. If you have
     <br/> question, reach out to our <Link to="#" className='text-decoration-none' style={{color:'darkblue'}}> Support</Link> team.
    </p>
  </div>
    </div>
    </>
  )
}

export default WelcomeMessage;