import React,{useEffect, useState} from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Services = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() =>{

      // Fetch from JSON
      
    fetch('doctor.json')
    .then(res => res.json())
    .then(data => setDoctors(data));
    }, [])
    return (
        <div>
            
          <body className="servicesDesign">
              
          <Container>
            {/* Services part start */}
            <h2 className='pt-2'>Our All Doctors</h2>
            <Row xs={1} md={3} className="g-4 pt-5 pb-5">


              {/* Map */}
            {
                doctors.map(service => <Doctor className='design' key={service.id} service={service}></Doctor>)
                
            }
                </Row>
            </Container>
          </body>
            
        </div>
    );
};

export default Services;