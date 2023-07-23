import React from 'react'
import { Row ,Col} from 'reactstrap';
import Logo from '../assets/images/logoblue.jpeg';
import { Link } from 'react-router-dom';


function Footer() {

  return (
    <>
    <Row className='w-100 promptsHeaderContainer' style={{width:''}}> 
        <Col className=' pb-2' xl={4} md={6} sm={12}> 
        <div className='pb-4'>
        <img src={Logo} className='img-fluid' width='90' alt='logo'/>
        </div>
        <div>
            <Link className='fs-5 pt-2 text-decoration-none text-light-emphasis'>The perfect ChatGPT web toolkit, designed to elevate your professional endeavours.</Link>
        </div>

        </Col>

        <Col  className=' pb-2' xl={2} xs={6}  md={3} > 
        <div className='pb-4 fs-6'>Product</div>
        <div className='pb-2'>
            <Link to='/prompt-packs' className='fs-6 pt-2  text-decoration-none text-light-emphasis fw-600' >Nyxil  Prompt Packs </Link>
        </div>
        <div className='pb-2'>
            <Link to='/bots' className='fs-6 pb-4 text-decoration-none text-light-emphasis fw-600'>Nyxil  Bots  <span className='mx-2 px-3' style={{background:'#ecfdf3',padding:'5px',fontSize:'9px',  borderRadius:'15px'}}>Coming Soon</span>
    </Link>
        </div>
        <div className='pb-2'>
            <Link to='/add-ons' className='fs-6 mt-4 text-decoration-none text-light-emphasis fw-600'>Nyxil  Add Ons</Link>
        </div>
        </Col>

        <Col  className=' pb-2' xl={2} xs={6}  md={3} > 
        <div className='pb-4 fs-6'>Company</div>
        <div className='pb-2'><Link className='fs-6 text-decoration-none text-light-emphasis fw-600'>Careers</Link></div>
        <div className='pb-2'><Link className='fs-6 text-decoration-none text-light-emphasis fw-600'>Contact</Link></div>
        </Col>

        <Col  className=' pb-2' xl={2} xs={6} >
        <div className='pb-4 fs-6'>Resources</div>
        <div className='pb-2'><Link className='fs-6 text-decoration-none text-light-emphasis fw-600'>Support</Link></div>
        <div className='pb-2'><Link className='fs-6 text-decoration-none text-light-emphasis fw-600'>Roadmap</Link></div>
        </Col>

        <Col  className=' pb-2' xl={2} xs={6}>
        <div className='pb-4 fs-6'>Legal</div>
        <div className='pb-2'><Link className='fs-6 text-decoration-none text-light-emphasis fw-600'>   Terms of service</Link></div>
        <div className='pb-2'><Link className='fs-6 text-decoration-none text-light-emphasis fw-600'>Privacy Policy</Link></div>
        </Col>
    </Row>
    
    </>
  )
}

export default Footer;