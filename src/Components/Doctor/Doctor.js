import React from 'react';
import { Button, Card, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = (props) => {
    const {id,Name,Department,Qualification,Designation,Chamber,Phone}=props.service;
   
    return (
        <div>

  
    <Col className='h-100 design '>
      <Card className='h-100 design'>
        <Card.Img className=' w-100' variant="top" src />
        <Card.Body >
        <Card.Title>Doctor: {Name}</Card.Title>
          <Card.Title>Department: {Department}</Card.Title>
          <p>Qualification: {Qualification}</p>
          <Card.Text>
            Disignation: {Designation}
          </Card.Text>
          <Link to={`/detail/${id}`}>
          <Button>View Detail</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>

        </div>
    );
};

export default Doctor;