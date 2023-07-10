import React from 'react'
import { Facebook } from 'react-feather';
import { Col ,Row} from 'reactstrap';

function CopyRight() {
  return (
    <div>
        <Row className='w-100 p-5'>
            <hr  style={{color:'gray'}}/>
            <Col xl={10} md={6} sm={12} className='pt-5'>
            <p className='fs-5 text-light-emphasis '>© 2023 Nyxil Studio AI. All rights reserved.</p>
            </Col>

            <Col xl={2} md={6}  sm={12} className='pt-5'>
            <div className=''><Facebook size={20}/>
            <span className='mx-2 px-3' style={{background:'#f2f4f7',padding:'5px',fontSize:'12px',  borderRadius:'15px'}}>100+</span></div>
            </Col>
        </Row>
    </div>
  )
}

export default CopyRight;