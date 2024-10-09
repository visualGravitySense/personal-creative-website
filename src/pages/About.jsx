import React from 'react';
import './About.css';

const About = ({ theme }) => {
  return (
    <div className={`about-section ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <h2>About Us</h2>
      <p>We provide unique courses from the best instructors. Join thousands of students learning new skills.</p>
      
      <div className="about-links">
        <a href="/about-us" className="about-link">About</a>
        <a href="/contact" className="about-link">Contact</a>
        <a href="/privacy-policy" className="about-link">Privacy Policy</a>
        <a href="/terms" className="about-link">Terms of use</a>
      </div>
      
      <div className="social-media">
        <p>Follow in social media:</p>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
      </div>
    </div>
  );
};

export default About;
