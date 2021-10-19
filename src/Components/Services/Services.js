import React,{useEffect, useState} from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{

      // Fetch from JSON
      
    fetch('department.json')
    .then(res => res.json())
    .then(data => setServices(data));
    }, [])
    return (
        <div>
            
          <body className="servicesDesign">
              
          <Container>
            {/* Services part start */}
            <h2 className='pt-2'>Our All Services</h2>
            <Row xs={1} md={3} className="g-4 pt-5 pb-5">


              {/* Map */}
            {
                services.map(service => <Service className='design' key={service.id} service={service}></Service>)
                
            }
                </Row>
            </Container>
          </body>
            
        </div>
    );
};

export default Services;