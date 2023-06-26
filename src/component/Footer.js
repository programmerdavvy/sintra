import React from 'react'
import { Row ,Col} from 'reactstrap';
import Logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';


function Footer() {

  return (
    <>
    <Row className='w-100 p-5'>
        <Col lg={3}>
        <div className='pb-4'>
        <img src={Logo} className='img-fluid' width='120' alt='logo'/>
        </div>
        <div>
            <Link className='fs-4 pt-2 text-decoration-none text-light-emphasis'>The ultimate AI companion for your work and life.</Link>
        </div>

        </Col>

        <Col lg={3}>
        <div className='pb-4 fs-5'>Product</div>
        <div>
            <Link className='fs-4 pt-2 text-decoration-none text-light-emphasis fw-600' >Sintra Prompt Packs</Link>
        </div>
        <div>
            <Link className='fs-4 pb-4 text-decoration-none text-light-emphasis fw-600'>Sintra Bots  <span className='fs-6 mx-2' 
                style={{
                    background:'#ecfdf3',borderRadius:'10px',padding:'6px'
                 }}
            
            >New</span></Link>
        </div>
        <div>
            <Link className='fs-4 mt-4 text-decoration-none text-light-emphasis fw-600'>Sintra Add-ons</Link>
        </div>
        </Col>

        <Col>
        <div className='pb-4 fs-5'>Company</div>
        <div><Link className='fs-4 text-decoration-none text-light-emphasis fw-600'>Careers</Link></div>
        <div><Link className='fs-4 text-decoration-none text-light-emphasis fw-600'>Contact</Link></div>
        </Col>

        <Col>
        <div className='pb-4 fs-5'>Resources</div>
        <div><Link className='fs-4 text-decoration-none text-light-emphasis fw-600'>Support</Link></div>
        <div><Link className='fs-4 text-decoration-none text-light-emphasis fw-600'>Roadmap</Link></div>
        </Col>

        <Col>
        <div className='pb-4 fs-5'>Legal</div>
        <div><Link className='fs-4 text-decoration-none text-light-emphasis fw-600'>   Terms of service</Link></div>
        <div><Link className='fs-4 text-decoration-none text-light-emphasis fw-600'>Privacy Policy</Link></div>
        </Col>

    </Row>
    
    </>
  )
}

export default Footer;