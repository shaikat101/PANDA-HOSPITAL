import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    const [homes, setHomes] = useState([]);
    useEffect(() =>{
    fetch('Department.json')
    .then(res => res.json())
    .then(data => setHomes(data));
    }, [])
    const sampleServices = (homes.slice(0,6))
    return (
        <div>
         <body className='homeDesign'>
               <Container>

                 {/* Header start */}
               
                 <Banner></Banner> 

  {/* Header End */}

  


  {/* Service Sample start */}
           <h2>Services</h2>
            <Row xs={1} md={3} className="g-4 pb-5">
           {
                sampleServices.map(sampleService =>  <Service key={sampleService.id} service={sampleService}> </Service> )
           }
           </Row>


           {/* Service Sample End */}
           </Container>
         </body>
        </div>
    );
};

export default Home;