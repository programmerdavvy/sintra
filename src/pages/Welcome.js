import React from 'react'
import Navbarmenu from '../component/Navbar';
import WelcomeMessageage from '../component/WelcomeMessage';
import Footer from '../component/Footer';
import CopyRight from '../component/CopyRight';

const Welcome = () => {
  return (
    <>
    <Navbarmenu/>
    <WelcomeMessageage/>
    <div style={{paddingTop:'100px'}}>
    <Footer/>
    </div>
    <div style={{paddingTop:'50px'}}>
    <CopyRight/>
    </div>
    </>
  )
}

export default Welcome;