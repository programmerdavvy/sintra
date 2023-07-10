import React from 'react'
import SinglePrompt from '../component/Prompt'
import Navbarmenu from '../component/Navbar'
import Footer from '../component/Footer'
import CopyRight from '../component/CopyRight'

function Prompt() {
  return (
    <>
    <div className='position-fixed  bg-white w-100'>
      <Navbarmenu/>
      </div>
      <div style={{paddingTop:'130px'}}>
      <SinglePrompt/>
      </div>
      <div style={{paddingTop:'100px'}}>
      <Footer/>
      </div>
      <div style={{paddingTop:'50px'}}>
      <CopyRight/>
      </div>
    </>
  )
}

export default Prompt