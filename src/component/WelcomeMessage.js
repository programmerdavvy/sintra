import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

function WelcomeMessage() {
  return (
    <>
    <div className='text-center  align-items-center mt-5'>
  <div>
  {/* <div className='p-2 text-center ' style={{background:'#efebff',borderRadius:'15px',color:'#4943c4',fontWeight:'600'}}> 
        Update
    </div> */}
    <div className=''>
        <Button style={{background:'#f2f4f7'}} color='#344054' className='updateBadge'>Update</Button>
    </div>
    <div>
        <h1 className=''style={{fontSize:'4rem'}}>Welcome to new Sintra Hub</h1>
    </div>
    <div>
        <p className='fs-4 pt-2'>We're happy to announce that we're transitioning from <br/>Sintra Hub to all-in-one platform Sintra AI.</p>
    </div>
    <div>
        <Link to="/login"  className='p-3 fs-6 btn text-white' style={{borderRadius:'12px',fontWeight:'600',background:'#4943c4'}}>Log In
         <span className='text-dark-500 rounded mx-2 ' style={{backgroundColor:'#ECFDF3',color:'grey',fontSize:'17px',padding:'3px'}}> for exciting users</span>
         </Link>
       
         <Link to='/signup'> <Button color='light' className='p-3 fs-6 mx-4'
         style={{border:'1px solid #eee',borderRadius:'12px',fontWeight:'600'}}
          >SIgn Up</Button></Link>
    </div>
    <p className='opacity-50 fs-5  mt-4'>
    Your account, purchased accesses, details and <br/> passwords stays the same. If you have
     <br/> question, reach out to our <Link to="#" className='text-decoration-none' style={{color:'#6042EC'}}> Support</Link> team.
    </p>
  </div>
    </div>
    </>
  )
}

export default WelcomeMessage;