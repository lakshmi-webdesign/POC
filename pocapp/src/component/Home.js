import React from 'react';
import '../style/Home.css'
import Carousel from 'react-bootstrap/Carousel';
import Carousel1 from '../images/Carousel1.jpg';
import Carousel2 from '../images/Carousel2.jpg';
function Home() {
  return (
    <Carousel>
    <Carousel.Item >
      <img 
        className="d-block carousel12"
        src={Carousel1}
        alt="First slide"
      />
      <Carousel.Caption style={{top:"30%",textAlign:"left"}}>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block carousel12"
        src={Carousel2}
        alt="Second slide"
      />

      <Carousel.Caption style={{top:"30%",textAlign:"left"}}>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    
  </Carousel>
  );
}

export default Home;