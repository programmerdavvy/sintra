import React from 'react'
import Navbarmenu from '../component/Navbar';
import PromptPackBread from '../component/PromptPack';
import Footer from '../component/Footer';
import CopyRight from '../component/CopyRight';

function PromptPack() {
  return (
    <>
   <div className='position-fixed  bg-white w-100'>
    <Navbarmenu/>
    </div>
    <div  style={{paddingTop:'130px'}}>
    <PromptPackBread/>
    </div>
      <div style={{paddingTop:'20px'}}>
      <Footer/>
      </div>
      <div style={{paddingTop:'50px'}}>
      <CopyRight/>
    </div>
        </>
  )
}

export default PromptPack;