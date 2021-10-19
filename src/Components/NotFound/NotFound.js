import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
       <body className='notFoundBg'>
          <div>
         <div>
         <img src="https://i2.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1" alt="" />
         </div>
      <div className='p-4'>
      <Link to='./'>
         <Button  variant='success'>Back To HomePage</Button>
       </Link>
      </div>
        </div>
       </body>
    );
};

export default NotFound;