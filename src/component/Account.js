import React,{useEffect, useState} from 'react'
import { ChevronRight, Home } from 'react-feather'
import { Link } from 'react-router-dom';
import {Spinner} from 'reactstrap';
import Profile from './Profile';
import Purchases from './Purchases';
import { request } from '../services/utilities';
import SSRStorage from '../services/storage';
import { USER_COOKIE } from '../services/constants';
const storage = new SSRStorage();

function Account() {
const [activeTab,setActiveTab] = useState('Profile');
const [purchasedPrompts,setPurchasedPrompts] = useState([]);
const [loading,setLoading] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const fetchPurchasedPromps = async () =>{
    setLoading(true);
    const user = await storage.getItem(USER_COOKIE);
    const url = `userSubscription?accesskey=${user? user[0].accesskey : ''}`
    try{
      const rs = await request(url,'POST',false);
      setPurchasedPrompts(rs);
    setLoading(false);

    }catch(err){
    setLoading(false);
      console.log(err);
    }
  }
  useEffect(()=>{
    fetchPurchasedPromps();
  },[])
  return (
    <>
    {loading &&<Spinner color='primary' style={{position:'absolute',top:'50%',left:'48%'}}/>}

      <div className='promptsHeaderContainer'>
          <div className='breadcru d-flex align-items-center'>
          <Home  size={25}/>
          <ChevronRight className='mx-2'  size={20} color='#eee'/>
          <span className=' fs-5'>Account</span>
          </div>

          <div className='pt-3'>
              <p className='fw-600 promptsHeaderBigText'>Account settings</p>
              <p className='text-light-emphasis promptsHeadersmallText'>Control your profile settings, see purchased items and get support.</p>
          </div>
      </div>
          <div className='pt-5 pb-5 promptsHeaderContainer' style={{background:'#F9FAFB'}}>
          <div className="logins__tabs"style={{width:'100%'}}>
                      <div style={{borderBottom:'1px solid #eaecf0'}}>
                      <div className="logins__tabs-menu" role="tablist" style={{borderBottom:'none',width:'20%'}}>
                        <Link
                          data-w-tab="Profile"
                          className={`logins__tabs__tab-link text-decoration-none w-inline-block ${
                            activeTab === "Profile" ? "w--current" : ""
                          }`}
                          onClick={() => handleTabClick("Profile")}
                        >
                          <div className='fw-600 text-light-emphasis'>Profile</div>
                        </Link>
                        <Link
                          data-w-tab="Purchases"
                          className={`logins__tabs__tab-link text-decoration-none w-inline-block w ${
                            activeTab === "Purchases" ? "w--current" : ""
                          }`}
                          onClick={() => handleTabClick("Purchases")}
                        >
                          <div className='fw-600 text-light-emphasis'>Purchases</div>
                        </Link>
                      </div>
                      </div>

                      <div className="logins__tabs-content">
                        {activeTab === 'Profile'?
                         <div
                         data-w-tab="Profile"
                         className={`logins__tabs__tab-pane ${
                           activeTab === "Profile" ? "w--tab-active" : ""
                         }`}
                       >
                         <div className="logins__form-module w-form " >
                          <Profile/> 
                         </div>
                       </div>:
                       <div
                       data-w-tab="Purchases"
                       className={`logins__tabs__tab-pane ${
                         activeTab === "Purchases" ? "w--tab-active" : ""
                       }`}
                     >
                       <div className="logins__form-module w-form">
                       <Purchases purchasedPrompts={purchasedPrompts}/>
                       </div>
                     </div>
                       }
                      </div>
          </div>
          
           </div>
    </>
  )
}

export default Account;