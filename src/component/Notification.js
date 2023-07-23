import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';

function Notification({message}) {
 

  return (
    <div className="mb-" >     
        <Toast show={true} className='w-100'>
          <Toast.Header className=' btnNotitifcation text-white bg-dark fw-600 justify-content-between'>
            <div>{message}</div>
          </Toast.Header>
        </Toast>
      </div>
  );
}

export default Notification;