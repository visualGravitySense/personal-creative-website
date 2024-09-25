import React from 'react';
import ChartModal from '../components/ChartModal';
import { Container, Button } from 'react-bootstrap';
import '../styles/hero-section.scss'; 



const HeroSection = ({ theme }) => {
  return (
    <section className={`hero-section ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <div className="hero-content">
      <h1>Creative Technologist | Digital Innovator</h1>
        {/* <h3>sub heading</h3> */}
        <p>At the intersection of technology, design and innovation. I create non-standard digital solutions that work at the intersection of creative ideas and modern technologies.</p>                
        <div>
          <Button className="m-2" variant="outline-secondary" href="/courses">View projects</Button>
          {/* <Button className="m-2" variant="outline-secondary" href="/signup">Присоединиться сейчас</Button> */}
          <ChartModal />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
