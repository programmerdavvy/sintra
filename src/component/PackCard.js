import React from 'react'
import {  CardBody,  Button } from 'reactstrap'
import BookImg from '../assets/images/book.webp'
import { Link } from 'react-router-dom'

function PackCard() {
  return (
    <>
        <div className='bg-white mb-3 shadow  p-4' style={{border:'none',borderRadius:'15px',width:'97%'}} key={'sak'}>
            <div className='item-img text-center mx-auto'>
              <Link to='#'>
                <img className='img-fluid card-img-top' src={BookImg} alt={'nae'} />
              </Link>
            </div>
            <CardBody>
             <div>
             <Button style={{background:'#f2f4f7',border:'none', borderRadius:'20px',color:'#6042EC'}}  className=''>Web Development</Button>
             </div>
             <div>
                <h4 className='pt-3 text-light-emphasis fw-600' style={{lineHeight:'1.5'}}>Ultimate ChatGPT Web Development Prompt Pack 💻</h4>
             </div>
             <div><p className=' text-light-emphasis pt-3 fs-5'>Set up, design & overview websites easier than ever with web developer prompts</p></div>
             <div>
                  <Button className='  w-100  fs-5 ' 
                  style={{padding:'12px',background:'#6042EC',fontWeight:'600',borderRadius:'15px',border:'none'}} >
                    Unlock with Sintra Plus
                    </Button>
                </div>
                <div>
                  <Button className='w-100 text-dark mt-3 fs-5 ' 
                  style={{padding:'12px',background:'white',border:'1px solid #eee', fontWeight:'600',borderRadius:'15px'}} >
                    Buy Now
                    </Button>
                </div>
            </CardBody>
            <div className='mt-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="10%" height="10%" viewBox="0 0 20 20" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
            <path d="M17.5 10.0003L7.5 10.0003M17.5 5.00033L7.5 5.00033M17.5 15.0003L7.5 15.0003M4.16667 10.0003C4.16667 10.4606 3.79357 10.8337 3.33333 10.8337C2.8731 10.8337 2.5 10.4606 2.5 10.0003C2.5 9.54009 2.8731 9.16699 3.33333 9.16699C3.79357 9.16699 4.16667 9.54009 4.16667 10.0003ZM4.16667 5.00033C4.16667 5.46056 3.79357 5.83366 3.33333 5.83366C2.8731 5.83366 2.5 5.46056 2.5 5.00033C2.5 4.54009 2.8731 4.16699 3.33333 4.16699C3.79357 4.16699 4.16667 4.54009 4.16667 5.00033ZM4.16667 15.0003C4.16667 15.4606 3.79357 15.8337 3.33333 15.8337C2.8731 15.8337 2.5 15.4606 2.5 15.0003C2.5 14.5401 2.8731 14.167 3.33333 14.167C3.79357 14.167 4.16667 14.5401 4.16667 15.0003Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
              <span className='fs-5 mx-2'>999+ top-tier prompts</span>
            </div>
            <div className='mt-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="10%" height="10%" viewBox="0 0 20 20" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
            <path d="M2.5 2.5V11C2.5 12.4001 2.5 13.1002 2.77248 13.635C3.01217 14.1054 3.39462 14.4878 3.86502 14.7275C4.3998 15 5.09987 15 6.5 15H12.5M12.5 15C12.5 16.3807 13.6193 17.5 15 17.5C16.3807 17.5 17.5 16.3807 17.5 15C17.5 13.6193 16.3807 12.5 15 12.5C13.6193 12.5 12.5 13.6193 12.5 15ZM2.5 6.66667L12.5 6.66667M12.5 6.66667C12.5 8.04738 13.6193 9.16667 15 9.16667C16.3807 9.16667 17.5 8.04738 17.5 6.66667C17.5 5.28595 16.3807 4.16667 15 4.16667C13.6193 4.16667 12.5 5.28596 12.5 6.66667Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <span className='fs-5 mx-2'>199+ tasks to automate</span>
            </div>
            <div className='mt-3 d-flex'>
              <svg xmlns="http://www.w3.org/2000/svg" width="10%" height="10%" viewBox="0 0 20 20" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
              <path d="M7.67714 12.0836C7.93731 12.5791 8.45681 12.917 9.05523 12.917H10.833C11.7535 12.917 12.4997 12.1708 12.4997 11.2503C12.4997 10.3298 11.7535 9.58363 10.833 9.58363H9.16634C8.24587 9.58363 7.49967 8.83744 7.49967 7.91697C7.49967 6.99649 8.24587 6.2503 9.16634 6.2503H10.9441C11.5425 6.2503 12.062 6.58821 12.3222 7.08363M9.99967 5.0003V6.2503M9.99967 12.917V14.167M16.6663 10.0003C16.6663 14.0907 12.2047 17.0656 10.5813 18.0127C10.3968 18.1203 10.3046 18.1741 10.1744 18.2021C10.0734 18.2237 9.92597 18.2237 9.82494 18.2021C9.69475 18.1741 9.60251 18.1203 9.41802 18.0127C7.79464 17.0656 3.33301 14.0907 3.33301 10.0003V6.01497C3.33301 5.34871 3.33301 5.01558 3.44197 4.72922C3.53824 4.47625 3.69466 4.25053 3.89772 4.07157C4.12759 3.869 4.43951 3.75203 5.06334 3.51809L9.53151 1.84253C9.70476 1.77756 9.79138 1.74508 9.88049 1.7322C9.95954 1.72078 10.0398 1.72078 10.1189 1.7322C10.208 1.74508 10.2946 1.77756 10.4678 1.84253L14.936 3.51809C15.5598 3.75203 15.8718 3.869 16.1016 4.07157C16.3047 4.25053 16.4611 4.47625 16.5574 4.72922C16.6663 5.01558 16.6663 5.34871 16.6663 6.01497V10.0003Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <span className='fs-5 mx-2'>14-days money-back guarantee</span>
            </div>
          </div>
    </>
  )
}

export default PackCard