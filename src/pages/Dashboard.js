import React from 'react'
import Navbarmenu from '../component/Navbar';
import Footer from '../component/Footer';
import CopyRight from '../component/CopyRight';
import DashboardHeader from '../component/DashboardHeader';
import DashboardPromptSlider from '../component/PromptSlider';

function Dashboard() {
  return (
    <>
   <div className='position-fixed  bg-white w-100'>
   <Navbarmenu/>
   </div>
   <div style={{paddingTop:'130px'}}>
    <DashboardHeader/>
    </div>
    <div style={{paddingTop:'90px'}}>
    <DashboardPromptSlider/>
    </div>
    {/* footer */}
    <div style={{paddingTop:'20px'}}>
    <Footer/>
    </div>
    <div style={{paddingTop:'50px'}}>
    <CopyRight/>
    </div>
        </>
  )
}

export default Dashboard;