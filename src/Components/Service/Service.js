import React from 'react';
import { Button, Card, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {id,image,Department,By,Description}=props.service;
   
    return (
        <div>

  
    <Col className='h-100 design '>
      <Card className='h-100 design'>
        <Card.Img className=' w-100' variant="top" src={image} />
        <Card.Body >
          <Card.Title>Department-Name: {Department}</Card.Title>
          <p>Description: {Description}</p>
          <Card.Text>
            By: {By}
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

export default Service;