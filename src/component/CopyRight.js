import React from 'react'
import { Facebook } from 'react-feather';
import { Col ,Row,Button} from 'reactstrap';

function CopyRight() {
  return (
    <div>
        <Row className='w-100 p-5'>
            <hr  style={{color:'gray'}}/>
            <Col lg={11} className='pt-5'>
            <p className='fs-4 text-light-emphasis '>© 2023 Sintra AI. All rights reserved.</p>
            </Col>

            <Col className='pt-5'>
            <Facebook size={30}/>
            <Button style={{background:'#f2f4f7',borderRadius:'15px'}} color='black' className='updateBadge mx-1 fs-6 text-light-emphasis'>100+</Button>
            </Col>
        </Row>
    </div>
  )
}

export default CopyRight;