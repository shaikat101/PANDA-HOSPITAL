import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner/banner-1.jpg'
import banner2 from '../../images/banner/banner-2.jpg'
import banner3 from '../../images/banner/banner-3.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <>

            <Carousel className="pt-5 pb-5">
  <Carousel.Item className="banner">
    <img
      className="img-fluid d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Our Special Hospital</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img-fluid d-block w-100 "
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
     <h3>Our special Operation Dostor's</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img-fluid d-block w-100 "
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;