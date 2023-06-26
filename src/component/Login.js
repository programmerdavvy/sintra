import React, { useState } from 'react'
import { Row ,Col,Button} from 'react-bootstrap';
import Logo from '../assets/images/logo.png';
import LoginImg from '../assets/images/login-i.png';
import { Link } from 'react-router-dom';

function Login() {

const [activeTab,setActiveTab] = useState('Email');


  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
        <Row className='w-100'>
            <Col  className='w-100' style={{padding:'40px'}}>
            <div className=''>
            <div>
            <Link to='/'> <img src={Logo} className='img-fluid' width='120' alt='logo'/></Link>

            </div>
            <div className="logins__container p-5">
                  <div className="logins__content">
                    <div className="logins__content__header">
                      <h1 className="logins__title">Log in</h1>
                      <p className="text-md fs-5 pt-2">
                        Welcome back! Please enter your details.
                      </p>
                    </div>
                    <div className="logins__tabs w-tabs">
                      <div className="logins__tabs-menu w-tab-menu" role="tablist" style={{width:'120%'}}>
                        <Link
                          data-w-tab="Email"
                          className={`logins__tabs__tab-link w-inline-block w-tab-link ${
                            activeTab === "Email" ? "w--current" : ""
                          }`}
                          onClick={() => handleTabClick("Email")}
                        >
                          <div className='fw-600'>Email</div>
                          <div className="tabs-settings__tab-span">Your Order</div>
                        </Link>
                        <Link
                          data-w-tab="Password"
                          className={`logins__tabs__tab-link w-inline-block w-tab-link ${
                            activeTab === "Password" ? "w--current" : ""
                          }`}
                          onClick={() => handleTabClick("Password")}
                        >
                          <div className='fw-600'>Password</div>
                        </Link>
                      </div>
                      <div className="logins__tabs-content w-tab-content">
                        <div
                          data-w-tab="Email"
                          className={`logins__tabs__tab-pane w-tab-pane ${
                            activeTab === "Email" ? "w--tab-active" : ""
                          }`}
                        >
                          <div className="logins__form-module w-form">
                            <form
                              id="email-form"
                              name="wf-form-Login-Form"
                              data-name="Login Form"
                              redirect="/tasks"
                              data-redirect="/tasks"
                              method="get"
                              className="logins__form"
                              aria-label="Login Form"
                              data-gtm-form-interact-id="0"
                            >
                              <div className="logins__inputs-wrapper">
                                <div className="input">
                                  <label htmlFor="email-2" className="input__label">
                                    Email
                                  </label>
                                  <input
                                    type="email"
                                    className="input__text-field w-input"
                                    maxLength="256"
                                    name="email-2"
                                    data-name="Email 2"
                                    placeholder="Enter your email"
                                    id="email-2"
                                    required=""
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                  />
                                  <div className="input__hint fs-5">
                                  Enter your purchase email to get the 6 digit code.
                                  </div>
                                </div>
                              </div>
                              <div className="logins__actions">
                                <input
                                  type="submit"
                                  value="Get 6 digit Code"
                                  data-wait="Please wait..."
                                  className="logins__btn-primary w-button"
                                  // onClick={handleLogin}
                                />
                              </div>
                            </form>
                          </div>
                        </div>
                        <div
                          data-w-tab="Password"
                          className={`logins__tabs__tab-pane w-tab-pane ${
                            activeTab === "Password" ? "w--tab-active" : ""
                          }`}
                        >
                          <div className="logins__form-module w-form">
                            <form
                              id="password-form"
                              name="wf-form-Login-Form"
                              data-name="Login Form"
                              redirect="/tasks"
                              data-redirect="/tasks"
                              method="get"
                              className="logins__form"
                              aria-label="Login Form"
                              data-gtm-form-interact-id="1"
                            >
                              <div className="logins__inputs-wrapper">
                                <div className="input">
                                  <label htmlFor="email-2" className="input__label">
                                    Email
                                  </label>
                                  <input
                                    type="email"
                                    className="input__text-field w-input"
                                    maxLength="256"
                                    name="email-2"
                                    data-name="Email 2"
                                    placeholder="Enter your email"
                                    id="email-2"
                                    required=""
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                  />
                                </div>
                                <div className="input">
                                  <label htmlFor="Password-2" className="input__label">
                                    Password
                                  </label>
                                  <input
                                    type="password"
                                    className="input__text-field w-input"
                                    maxLength="256"
                                    name="Password-2"
                                    data-name="Password 2"
                                    placeholder="Enter your password"
                                    id="Password-2"
                                    required=""
                                    // value={password}
                                    // onChange={(e) => setPassword(e.target.value)}
                                  />
                                  
                                </div>
                              </div>
                              <div className="logins__actions ">
                                <input
                                  type="submit"
                                  value="Sign in"
                                  data-wait="Please wait..."
                                  className="logins__btn-primary w-button"
                                  // onClick={handleLogin}
                                />
                              </div>
                              <div>
                              <Button className='text-dark fs-5 '
                   style={{background:'transparent',padding:'12px',width:'120%',fontWeight:'600',border:' 1px solid gray',borderRadius:'15px'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="8%" height="8%" viewBox="0 0 24 24" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                    <path d="M22.5005 12.2332C22.5005 11.3699 22.4291 10.7399 22.2744 10.0865H12.2148V13.9832H18.1196C18.0006 14.9515 17.3577 16.4099 15.9291 17.3898L15.9091 17.5203L19.0897 19.935L19.3101 19.9565C21.3338 18.1249 22.5005 15.4298 22.5005 12.2332" fill="#4285F4"></path>
                    <path d="M12.214 22.5C15.1068 22.5 17.5353 21.5666 19.3092 19.9566L15.9282 17.3898C15.0235 18.0082 13.8092 18.4399 12.214 18.4399C9.38069 18.4399 6.97596 16.6082 6.11874 14.0765L5.99309 14.087L2.68583 16.5954L2.64258 16.7132C4.40446 20.1432 8.0235 22.5 12.214 22.5Z" fill="#34A853"></path>
                    <path d="M6.12095 14.0766C5.89476 13.4233 5.76386 12.7232 5.76386 11.9999C5.76386 11.2765 5.89476 10.5766 6.10905 9.92325L6.10306 9.78411L2.75435 7.23547L2.64478 7.28655C1.91862 8.7099 1.50195 10.3083 1.50195 11.9999C1.50195 13.6916 1.91862 15.2899 2.64478 16.7132L6.12095 14.0766" fill="#FBBC05"></path>
                    <path d="M12.2141 5.55997C14.2259 5.55997 15.583 6.41163 16.3569 7.12335L19.3807 4.23C17.5236 2.53834 15.1069 1.5 12.2141 1.5C8.02353 1.5 4.40447 3.85665 2.64258 7.28662L6.10686 9.92332C6.97598 7.39166 9.38073 5.55997 12.2141 5.55997" fill="#EB4335"></path>
                    </svg>
                    <span className='mx-2'> Sign in with Google</span></Button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* {loginError && <div className="logins__error">{loginError}</div>} */}
                    <div className="logins__after-form">
                      <div className='fs-5'>  Don't have an account?  <Link  style={{color:'#6042EC'}} to="/signup" className="fs-5 logins__text-link text-decoration-none">
                        Sign up
                      </Link> </div>
                     
                          {activeTab !== 'Email' && <Link style={{color:'#6042EC'}}
                                    to="/password/forgot"
                                    className="logins__text-link text-decoration-none fs-5"
                                  >
                                    Forgot password?
                                  </Link>}
                    </div>
                  </div>
             </div>
             <div className='d-flex mt-5 justify-content-between align-items-center'>
              <div className='fs-5'> © Sintra AI</div>
              <div className='fs-5'> Get Help</div>

             </div>
            </div>
            </Col>

            <Col  className='w-100 px-5 pt-5 ' style={{background:'#F9FAFB'}}>
            <div>
                <p className='fs-1' style={{paddingTop:'120px',fontWeight:'500'}}>"Sintra AI has revolutionized the way I tackle projects,
                     boosting my productivity and sparking incredible creativity. It's an absolute game-changer!"</p>
            </div>
            <div className='d-flex justify-content-between'>
              <div>
              <p className='fs-3 fw-600 mb-0'>– David Kovger</p>
              <p className='fs-4 mb-0'>CEO of Monkeflow</p>
              </div>
              <div className=''>  
              <svg className='mx-4' xmlns="http://www.w3.org/2000/svg" width="100%" height="30%" viewBox="0 0 108 20" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                <g clip-path="url(#clip0_6170_170502)">
                <path d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z" fill="#F2F4F7"></path>
                <g clip-path="url(#clip1_6170_170502)">
                <path d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z" fill="#101828"></path>
                </g>
                </g>
                <g clip-path="url(#clip2_6170_170502)">
                <path d="M31.5383 1.60996C31.7091 1.19932 32.2909 1.19932 32.4617 1.60996L34.5278 6.57744C34.5998 6.75056 34.7626 6.86885 34.9495 6.88383L40.3123 7.31376C40.7556 7.3493 40.9354 7.90256 40.5976 8.19189L36.5117 11.6919C36.3693 11.8139 36.3071 12.0053 36.3506 12.1876L37.5989 17.4208C37.7021 17.8534 37.2315 18.1954 36.8519 17.9635L32.2606 15.1592C32.1006 15.0615 31.8994 15.0615 31.7394 15.1592L27.1481 17.9635C26.7685 18.1954 26.2979 17.8534 26.4011 17.4208L27.6494 12.1876C27.6929 12.0053 27.6307 11.8139 27.4883 11.6919L23.4024 8.19189C23.0646 7.90256 23.2444 7.3493 23.6877 7.31376L29.0505 6.88383C29.2374 6.86885 29.4002 6.75056 29.4722 6.57744L31.5383 1.60996Z" fill="#F2F4F7"></path>
                <g clip-path="url(#clip3_6170_170502)">
                <path d="M31.5383 1.60996C31.7091 1.19932 32.2909 1.19932 32.4617 1.60996L34.5278 6.57744C34.5998 6.75056 34.7626 6.86885 34.9495 6.88383L40.3123 7.31376C40.7556 7.3493 40.9354 7.90256 40.5976 8.19189L36.5117 11.6919C36.3693 11.8139 36.3071 12.0053 36.3506 12.1876L37.5989 17.4208C37.7021 17.8534 37.2315 18.1954 36.8519 17.9635L32.2606 15.1592C32.1006 15.0615 31.8994 15.0615 31.7394 15.1592L27.1481 17.9635C26.7685 18.1954 26.2979 17.8534 26.4011 17.4208L27.6494 12.1876C27.6929 12.0053 27.6307 11.8139 27.4883 11.6919L23.4024 8.19189C23.0646 7.90256 23.2444 7.3493 23.6877 7.31376L29.0505 6.88383C29.2374 6.86885 29.4002 6.75056 29.4722 6.57744L31.5383 1.60996Z" fill="#101828"></path>
                </g>
                </g>
                <g clip-path="url(#clip4_6170_170502)">
                <path d="M53.5383 1.60996C53.7091 1.19932 54.2909 1.19932 54.4617 1.60996L56.5278 6.57744C56.5998 6.75056 56.7626 6.86885 56.9495 6.88383L62.3123 7.31376C62.7556 7.3493 62.9354 7.90256 62.5976 8.19189L58.5117 11.6919C58.3693 11.8139 58.3071 12.0053 58.3506 12.1876L59.5989 17.4208C59.7021 17.8534 59.2315 18.1954 58.8519 17.9635L54.2606 15.1592C54.1006 15.0615 53.8994 15.0615 53.7394 15.1592L49.1481 17.9635C48.7685 18.1954 48.2979 17.8534 48.4011 17.4208L49.6494 12.1876C49.6929 12.0053 49.6307 11.8139 49.4883 11.6919L45.4024 8.19189C45.0646 7.90256 45.2444 7.3493 45.6877 7.31376L51.0505 6.88383C51.2374 6.86885 51.4002 6.75056 51.4722 6.57744L53.5383 1.60996Z" fill="#F2F4F7"></path>
                <g clip-path="url(#clip5_6170_170502)">
                <path d="M53.5383 1.60996C53.7091 1.19932 54.2909 1.19932 54.4617 1.60996L56.5278 6.57744C56.5998 6.75056 56.7626 6.86885 56.9495 6.88383L62.3123 7.31376C62.7556 7.3493 62.9354 7.90256 62.5976 8.19189L58.5117 11.6919C58.3693 11.8139 58.3071 12.0053 58.3506 12.1876L59.5989 17.4208C59.7021 17.8534 59.2315 18.1954 58.8519 17.9635L54.2606 15.1592C54.1006 15.0615 53.8994 15.0615 53.7394 15.1592L49.1481 17.9635C48.7685 18.1954 48.2979 17.8534 48.4011 17.4208L49.6494 12.1876C49.6929 12.0053 49.6307 11.8139 49.4883 11.6919L45.4024 8.19189C45.0646 7.90256 45.2444 7.3493 45.6877 7.31376L51.0505 6.88383C51.2374 6.86885 51.4002 6.75056 51.4722 6.57744L53.5383 1.60996Z" fill="#101828"></path>
                </g>
                </g>
                <g clip-path="url(#clip6_6170_170502)">
                <path d="M75.5383 1.60996C75.7091 1.19932 76.2909 1.19932 76.4617 1.60996L78.5278 6.57744C78.5998 6.75056 78.7626 6.86885 78.9495 6.88383L84.3123 7.31376C84.7556 7.3493 84.9354 7.90256 84.5976 8.19189L80.5117 11.6919C80.3693 11.8139 80.3071 12.0053 80.3506 12.1876L81.5989 17.4208C81.7021 17.8534 81.2315 18.1954 80.8519 17.9635L76.2606 15.1592C76.1006 15.0615 75.8994 15.0615 75.7394 15.1592L71.1481 17.9635C70.7685 18.1954 70.2979 17.8534 70.4011 17.4208L71.6494 12.1876C71.6929 12.0053 71.6307 11.8139 71.4883 11.6919L67.4024 8.19189C67.0646 7.90256 67.2444 7.3493 67.6877 7.31376L73.0505 6.88383C73.2374 6.86885 73.4002 6.75056 73.4722 6.57744L75.5383 1.60996Z" fill="#F2F4F7"></path>
                <g clip-path="url(#clip7_6170_170502)">
                <path d="M75.5383 1.60996C75.7091 1.19932 76.2909 1.19932 76.4617 1.60996L78.5278 6.57744C78.5998 6.75056 78.7626 6.86885 78.9495 6.88383L84.3123 7.31376C84.7556 7.3493 84.9354 7.90256 84.5976 8.19189L80.5117 11.6919C80.3693 11.8139 80.3071 12.0053 80.3506 12.1876L81.5989 17.4208C81.7021 17.8534 81.2315 18.1954 80.8519 17.9635L76.2606 15.1592C76.1006 15.0615 75.8994 15.0615 75.7394 15.1592L71.1481 17.9635C70.7685 18.1954 70.2979 17.8534 70.4011 17.4208L71.6494 12.1876C71.6929 12.0053 71.6307 11.8139 71.4883 11.6919L67.4024 8.19189C67.0646 7.90256 67.2444 7.3493 67.6877 7.31376L73.0505 6.88383C73.2374 6.86885 73.4002 6.75056 73.4722 6.57744L75.5383 1.60996Z" fill="#101828"></path>
                </g>
                </g>
                <g clip-path="url(#clip8_6170_170502)">
                <path d="M97.5383 1.60996C97.7091 1.19932 98.2909 1.19932 98.4617 1.60996L100.528 6.57744C100.6 6.75056 100.763 6.86885 100.949 6.88383L106.312 7.31376C106.756 7.3493 106.935 7.90256 106.598 8.19189L102.512 11.6919C102.369 11.8139 102.307 12.0053 102.351 12.1876L103.599 17.4208C103.702 17.8534 103.231 18.1954 102.852 17.9635L98.2606 15.1592C98.1006 15.0615 97.8994 15.0615 97.7394 15.1592L93.1481 17.9635C92.7685 18.1954 92.2979 17.8534 92.4011 17.4208L93.6494 12.1876C93.6929 12.0053 93.6307 11.8139 93.4883 11.6919L89.4024 8.19189C89.0646 7.90256 89.2444 7.3493 89.6877 7.31376L95.0505 6.88383C95.2374 6.86885 95.4002 6.75056 95.4722 6.57744L97.5383 1.60996Z" fill="#F2F4F7"></path>
                <g clip-path="url(#clip9_6170_170502)">
                <path d="M97.5383 1.60996C97.7091 1.19932 98.2909 1.19932 98.4617 1.60996L100.528 6.57744C100.6 6.75056 100.763 6.86885 100.949 6.88383L106.312 7.31376C106.756 7.3493 106.935 7.90256 106.598 8.19189L102.512 11.6919C102.369 11.8139 102.307 12.0053 102.351 12.1876L103.599 17.4208C103.702 17.8534 103.231 18.1954 102.852 17.9635L98.2606 15.1592C98.1006 15.0615 97.8994 15.0615 97.7394 15.1592L93.1481 17.9635C92.7685 18.1954 92.2979 17.8534 92.4011 17.4208L93.6494 12.1876C93.6929 12.0053 93.6307 11.8139 93.4883 11.6919L89.4024 8.19189C89.0646 7.90256 89.2444 7.3493 89.6877 7.31376L95.0505 6.88383C95.2374 6.86885 95.4002 6.75056 95.4722 6.57744L97.5383 1.60996Z" fill="#101828"></path>
                </g>
                </g>
                <defs>
                <clipPath id="clip0_6170_170502">
                <rect width="20" height="20" fill="white"></rect>
                </clipPath>
                <clipPath id="clip1_6170_170502">
                <rect width="20" height="20" fill="white"></rect>
                </clipPath>
                <clipPath id="clip2_6170_170502">
                <rect width="20" height="20" fill="white" transform="translate(22)"></rect>
                </clipPath>
                <clipPath id="clip3_6170_170502">
                <rect width="20" height="20" fill="white" transform="translate(22)"></rect>
                </clipPath>
                <clipPath id="clip4_6170_170502">
                <rect width="20" height="20" fill="white" transform="translate(44)"></rect>
                </clipPath>
                <clipPath id="clip5_6170_170502">
                <rect width="20" height="20" fill="white" transform="translate(44)"></rect>
                </clipPath>
                <clipPath id="clip6_6170_170502">
                <rect width="20" height="20" fill="white" transform="translate(66)"></rect>
                </clipPath>
                <clipPath id="clip7_6170_170502">
                <rect width="20" height="20" fill="white" transform="translate(66)"></rect>
                </clipPath>
                <clipPath id="clip8_6170_170502">
                <rect width="20" height="20" fill="white" transform="translate(88)"></rect>
                </clipPath>
                <clipPath id="clip9_6170_170502">
                <rect width="20" height="20" fill="white" transform="translate(88)"></rect>
                </clipPath>
                </defs>
               </svg>
              </div>
            </div>
            <div className='' style={{marginTop:'100px'}}>
                <img src={LoginImg} height='170px' width='100%' alt="loginImg"/>
              </div>
            </Col>
        </Row>
    </>
  )
}

export default Login;