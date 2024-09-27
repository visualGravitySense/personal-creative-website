import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './AboutSection.scss';
import { FaTelegram, FaGithub, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import aboutImage from '../assets/profile.png'; 


const AboutSection = ({ theme }) => {
  // URL изображения из JSONPlaceholder
  // const imageUrl = '/src/assets/profile.png';

  return (
    
          
          
      <section className={`about-section ${theme === 'dark' ? 'dark-mode' : ''}`}>
        <Row>
        <h2>About Me</h2>
        <Col md={4}>
          <img
            src={aboutImage}
            alt="About Our Platform"
            className="about-image"
          />
        </Col>
          <Col md={8}>
            <div className="about-container">
              
              <div className="about-info">
                
                <p>
                My work has always been at the intersection of technology and design. I see technology as a tool for realizing creative concepts that go beyond conventional solutions. In the process, I have learned key technologies that help me quickly bring ideas to life.
                </p>
                <p>
                My current projects and developments can be found on GitHub, where I share code and ideas, and on my Telegram channel, where I publish insights for designers and developers.
                </p><br></br>
                
                <div className="footer-social">
                  <a href="https://github.com/visualGravitySense" aria-label="GitHub"><FaGithub /></a>
                  <a href="https://www.linkedin.com/in/dmitri-gornakov-7a664840/" aria-label="LinkedIn"><FaLinkedin /></a>
                 
                </div>
                {/* <Button className="m-2" variant="primary" href="/courses">Мое обучение</Button> */}
                {/* <Button className="m-2" variant="outline-secondary" href="/signup">Стать преподавателем</Button> */}
              
              </div>
            </div>
            </Col>
            </Row>  
          </section>
          
          
          
         
    
  );
};

export default AboutSection;
