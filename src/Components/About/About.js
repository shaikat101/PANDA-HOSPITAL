import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './about.css'
import about from '../../images/about/about.jpg'

const About = () => {
    return (
       
            
        
               
           <Container fluid className="aboutDesign">
           <Container>
            <Row>
    <Col xs={12} md={6}>
    <img className='img-fluid w-100"' src={about} alt="" />
    </Col>
    <Col xs={12} md={6} >
    <h5 className='text'>PandaCare_Hospital  has been performing its work with a reputation for 10 long years. People from home and abroad get our services here 24 hours a day. You are also invited to get services from our organization.
</h5>
    </Col>
  </Row>
            </Container>

           </Container>
        
        
    );
};

export default About;