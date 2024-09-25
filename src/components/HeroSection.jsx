import React from 'react';
import Col from "react-bootstrap/Col"; 
import ChartModal from '../components/ChartModal';
import { Container, Button } from 'react-bootstrap';
import './hero.scss'; 



const HeroSection = ({ theme }) => {
  return (
    <section className={`hero-section ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <div className="hero-content">
      
        
        {/* <Col md={8}> */}
          <h1>Creative Technologist</h1>
          <h3>Digital Innovator</h3>
        
        <p>At the intersection of technology, design and innovation. I create non-standard digital solutionsthat work at the intersection of creative ideas and modern technologies.</p>                
        <div>
          <Button className="m-2" variant="outline-secondary" href="/courses">View projects</Button>
          {/* <Button className="m-2" variant="outline-secondary" href="/signup">Присоединиться сейчас</Button> */}
          <ChartModal />
          
        </div>
        {/* </Col> */}

        
      </div>
    </section>
  );
};

export default HeroSection;
