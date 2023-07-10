import React from 'react'
import { Row ,Col} from 'reactstrap';
import Logo from '../assets/images/nyxil_logo.png';
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
            <Link className='fs-5 pt-2 text-decoration-none text-light-emphasis'>The ultimate AI companion for your work and life.</Link>
        </div>

        </Col>

        <Col  className=' pb-2' xl={2} xs={6}  md={3} > 
        <div className='pb-4 fs-6'>Product</div>
        <div>
            <Link to='/prompt-packs' className='fs-6 pt-2 text-decoration-none text-light-emphasis fw-600' >Nyxil  Prompt Packs </Link>
        </div>
        <div>
            <Link to='/bots' className='fs-6 pb-4 text-decoration-none text-light-emphasis fw-600'>Nyxil  Bots  <span className='mx-2 px-3' style={{background:'#ecfdf3',padding:'5px',fontSize:'12px',  borderRadius:'15px'}}>New</span>
    </Link>
        </div>
        <div>
            <Link to='/add-ons' className='fs-6 mt-4 text-decoration-none text-light-emphasis fw-600'>Nyxil Studio Add-ons</Link>
        </div>
        </Col>

        <Col  className=' pb-2' xl={2} xs={6}  md={3} > 
        <div className='pb-4 fs-6'>Company</div>
        <div><Link className='fs-6 text-decoration-none text-light-emphasis fw-600'>Careers</Link></div>
        <div><Link className='fs-6 text-decoration-none text-light-emphasis fw-600'>Contact</Link></div>
        </Col>

        <Col  className=' pb-2' xl={2} xs={6} >
        <div className='pb-4 fs-6'>Resources</div>
        <div><Link className='fs-6 text-decoration-none text-light-emphasis fw-600'>Support</Link></div>
        <div><Link className='fs-6 text-decoration-none text-light-emphasis fw-600'>Roadmap</Link></div>
        </Col>

        <Col  className=' pb-2' xl={2} xs={6}>
        <div className='pb-4 fs-6'>Legal</div>
        <div><Link className='fs-6 text-decoration-none text-light-emphasis fw-600'>   Terms of service</Link></div>
        <div><Link className='fs-6 text-decoration-none text-light-emphasis fw-600'>Privacy Policy</Link></div>
        </Col>
    </Row>
    
    </>
  )
}

export default Footer;