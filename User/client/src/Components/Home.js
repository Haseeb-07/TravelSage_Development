import React from 'react';
import image from '../Images/map.png'
import { Container, Row, Col } from 'react-bootstrap';

import bag from '../Images/bag.png'
import './Home.css';

export default function Home() {
  return (
    <>
   <section id="home">
   <div className="home-container" style={{ backgroundImage: `url(${image})` }}>
   <Container className='custom-container'>
  <Row className='custom-row'>
    <Col xs={12} md={6} className='custom-col'>
      <div className='home-heading'>
        <p>DISCOVER ISLAMABAD’s BEST DESTINATIONS </p>
        <h3>Embark on a Journey Beyond <span className='orange-text'>Imagination.</span></h3>
        <p>We can Build The Holidays Of Your Dream And Make Them Unforgettable</p>
      </div>
    </Col>
    <Col xs={12} md={6} className='custom-col'>
      <img src={bag} alt="" className='img-fluid' />
    </Col>
  </Row>
</Container>

   
</div>
    </section>
    </>
  );
}
