import React, { useEffect, useState, button } from 'react';
import './StudentTestimonials.css';

const StudentTestimonials = ({ theme }) => {
  const [testimonials] = useState([
    {
      name: 'Why UI/UX design can actually ruin a product',
      description: 'Today, UI/UX design is considered an integral part of a successful product. In pursuit of perfect interfaces, many companies forget about the main goal.',
      image: 'https://via.placeholder.com/800x400',
      // instructor: 'Dmitri Gornakov',
      // image: 'https://via.placeholder.com/800x400',
    },
    {
      name: 'Miro and Obsidian to work effectively on projects',
      description: 'In the world of creative technologies, where every detail and idea matters, effective tools for organizing information and collaborating can be a real find.',
      image: 'https://via.placeholder.com/800x400',
      // instructor: 'Dmitri Gornakov',
      // image: 'https://via.placeholder.com/800x400',
    },
    
  ]);

  return (
    <section className={`testimonials-section ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <div className="testimonials-container">
        <h2>Blog</h2>
        <div className="testimonials-content">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <div className="testimonial-info">
                <h3>{testimonial.name}</h3>
                {/* <p className="testimonial-course">{testimonial.course}</p> */}
                <p>{testimonial.description}</p>
                <button className="btn-learn-more">Read</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;
