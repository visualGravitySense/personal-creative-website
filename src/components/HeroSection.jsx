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
        {/* <h1>Creative Technologist | Digital Innovator</h1> */}
        <h1>Creative Technologist<br></br><span className="highlighted-word">Digital</span> Innovator</h1>
        {/* <h1 className="responsive-text">Creative Technologist <span className="highlighted-word">Digital</span> Innovator</h1> */}

        {/* <p>At the intersection of technology, design and innovation. I create non-standard digital solutionsthat work at the intersection of creative ideas and modern technologies.</p>                 */}
        <p className="responsive-text">
          At the intersection of technology, design and innovation. I create non-standard digital solutions that work at the intersection of creative ideas and modern technologies.
        </p>

        <div>
          <Button className="m-3" variant="outline-secondary" href="/courses">View projects</Button>
          {/* <Button className="m-2" variant="outline-secondary" href="/signup">Присоединиться сейчас</Button> */}
          <ChartModal  />
          
        </div>
        {/* </Col> */}

        
      </div>
    </section>
  );
};

export default HeroSection;
