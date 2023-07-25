import React, { useEffect, useState } from 'react';

import { Nav, Navbar, Container } from 'react-bootstrap';
import {
  Button,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from 'reactstrap';
import Logo from '../assets/images/logoblue.jpeg';
import {
  User,
  ChevronDown,
  LogOut,
  Settings,
  ShoppingCart,
} from 'react-feather';
import NavbarDropdown from './NavbarDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { USER_COOKIE } from '../services/constants';
import SSRStorage from '../services/storage';
const storage = new SSRStorage();
const Navbarmenu = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [activeUser, setActiveUser] = useState(null);
  const navigate = useNavigate();

  const handleOpenDropdown = () => {
    let chevronDown = document.getElementById('chevronDown');
    chevronDown.style.transform = 'rotate(180deg)';
    chevronDown.style.transition = '0.5s';
    setShowDropDown(true);
  };

  const handleCLoseDropdown = () => {
    let chevronDown = document.getElementById('chevronDown');
    chevronDown.style.transform = 'rotate(1deg)';
    setShowDropDown(false);
  };
  const toggleDropdown = () => {
    setShowDropDown(!showDropDown);
  };
  const handlelogout = () => {
    storage.removeItem(USER_COOKIE);
    navigate('/login');
  };
  useEffect(() => {
    const loginUser = async () => {
      const user = await storage.getItem(USER_COOKIE);
      setActiveUser(user);
    };
    loginUser();
  }, []);
  return (
    <div>
      <Navbar
        expand='lg'
        className='p-3'
        style={{ borderBottom: '1px solid #eee' }}
      >
        <Container fluid className='align-items-center'>
          <Navbar.Brand>
            <Link to='/'>
              <img
                src={Logo}
                className='img-fluid mx-3'
                width='90'
                alt='logo'
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto fs-6 fw-600'>
              <Nav>
                <div className='pt-2'>
                  <Link
                    to='/prompts'
                    className='text-decoration-none  text-light-emphasis  fs-6'
                  >
                    {' '}
                    Prompts{' '}
                    <span
                      className='mx-2 px-3'
                      style={{
                        background: '#ecfdf3',
                        padding: '5px',
                        fontSize: '10px',
                        borderRadius: '15px',
                      }}
                    >
                      New
                    </span>
                  </Link>
                </div>
              </Nav>
              <Nav.Link
                href='#'
                onMouseEnter={() => handleOpenDropdown()}
                onClick={toggleDropdown}
              >
                Products <ChevronDown id='chevronDown' />
              </Nav.Link>
            </Nav>
            <Nav>
              {activeUser !== null ? (
                <div className='d-flex'>
                  <button
                    className='btn text-white mx-3 fs-6'
                    style={{ backgroundColor: '#5D57D9', fontWeight: '600' }}
                  >
                    Submit a Feature Request!🚀
                  </button>
                  <div>
                    <div className=''>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle
                          color='flat-secondary'
                          style={{ border: 'none' }}
                          caret
                        >
                          <span
                            className='bg-light   p-2 rounded-circle'
                            style={{ cursor: 'pointer' }}
                          >
                            <User size={25} />
                          </span>
                        </DropdownToggle>
                        <DropdownMenu className='p-2'>
                          <DropdownItem tag='a'>
                            <Link
                              to='/account'
                              className='text-decoration-none  text-light-emphasis  fs-6'
                            >
                              <Settings size={20} className='mx-2' /> My profile
                            </Link>
                          </DropdownItem>
                          <DropdownItem className='mt-2' tag='a'>
                            <Link
                              to='/account'
                              className='text-decoration-none  text-light-emphasis  fs-6'
                            >
                              <ShoppingCart className='mx-2' size={20} />
                              My purchases
                            </Link>
                          </DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem href='/' tag='a'>
                            <Link
                              to='#'
                              className='text-decoration-none  text-light-emphasis  fs-6'
                            >
                              <svg
                                className='mx-2'
                                xmlns='http://www.w3.org/2000/svg'
                                width='15%'
                                height='100%'
                                viewBox='0 0 16 16'
                                fill='none'
                                preserveAspectRatio='xMidYMid meet'
                                aria-hidden='true'
                                role='img'
                              >
                                <g clipPath='url(#clip0_6512_426046)'>
                                  <path
                                    d='M6.06016 5.99992C6.2169 5.55436 6.52626 5.17866 6.93347 4.93934C7.34067 4.70002 7.81943 4.61254 8.28495 4.69239C8.75047 4.77224 9.17271 5.01427 9.47688 5.3756C9.78106 5.73694 9.94753 6.19427 9.94683 6.66659C9.94683 7.99992 7.94683 8.66659 7.94683 8.66659M8.00016 11.3333H8.00683M14.6668 7.99992C14.6668 11.6818 11.6821 14.6666 8.00016 14.6666C4.31826 14.6666 1.3335 11.6818 1.3335 7.99992C1.3335 4.31802 4.31826 1.33325 8.00016 1.33325C11.6821 1.33325 14.6668 4.31802 14.6668 7.99992Z'
                                    stroke='#344054'
                                    strokeWidth='1.5'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id='clip0_6512_426046'>
                                    <rect
                                      width='16'
                                      height='16'
                                      fill='white'
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                              Support
                            </Link>
                          </DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem onClick={handlelogout} tag='a'>
                            <Link
                              to='#'
                              className='text-decoration-none  text-light-emphasis  fs-6'
                            >
                              <LogOut className='mx-2' size={20} />
                              Logout
                            </Link>
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    </div>
                  </div>
                </div>
              ) : (
                <div className=''>
                  <Link to='/login' className='text-decoration-none'>
                    <Button
                      className=' fs-6 fw-600'
                      style={{
                        background: 'white',
                        fontWeight: '600',
                        borderRadius: '12px',
                        border: 'none',
                        width: '100px',
                        color: 'black',
                        padding: '10px',
                      }}
                    >
                      Log in
                    </Button>
                  </Link>
                  <Link to='/signup'>
                    <Button
                      className='fs-6 fw-600'
                      style={{
                        fontWeight: '600',
                        backgroundColor: '#5D57D9',
                        borderRadius: '12px',
                        border: 'none',
                        width: '100px',
                        padding: '10px',
                      }}
                    >
                      Sign up
                    </Button>
                  </Link>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div onMouseLeave={() => handleCLoseDropdown()}>
        {showDropDown && <NavbarDropdown activeUser={activeUser} />}
      </div>
    </div>
  );
};

export default Navbarmenu;
