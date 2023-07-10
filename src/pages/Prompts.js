import React from 'react'
import PromptsCo from '../component/Prompts';
import Navbarmenu from '../component/Navbar';
import Footer from '../component/Footer';
import CopyRight from '../component/CopyRight';

function Prompts() {
  return (
    <>
      <div className='position-fixed  bg-white w-100'>
      <Navbarmenu/>
      </div>
      <div  style={{paddingTop:'130px'}}>
      <PromptsCo/>
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

export default Prompts;