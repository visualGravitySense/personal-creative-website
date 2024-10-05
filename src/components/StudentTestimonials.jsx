import React, { useEffect, useState, button } from "react";
import "./StudentTestimonials.css";
import { Link } from "react-router-dom";

import uiuxproduct from '../assets/uiux-bugs.jpeg';
import miroobsidian from '../assets/miro-obsidian.jpeg';

const StudentTestimonials = ({ theme }) => {
  const [testimonials] = useState([
    {
      id: 1,
      name: "Why UI/UX design can actually ruin a product",
      description:
        "Today, UI/UX design is considered an integral part of a successful product. In pursuit of perfect interfaces, many companies forget about the main goal.",
      image: uiuxproduct,
      content:
        "In pursuit of perfect interfaces, many companies forget about the main goal...", // Full content for the detail page


    },
    {
      id: 2,
      name: "Miro and Obsidian to work effectively on projects",
      description:
        "In the world of creative technologies, where every detail and idea matters, effective tools for organizing information and collaborating can be a real find.",
      image: miroobsidian,
      content:
        "Effective tools for organizing information and collaborating can be a real find...",

    },
  ]);

  return (
    <section className={`testimonials-section ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <div className="testimonials-container">
        <h2>Blog</h2>
        <div className="testimonials-content">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <div className="testimonial-info">
                <h3>{testimonial.name}</h3>
                <p>{testimonial.description}</p>
                {/* Link to the testimonial detail page */}
                <Link to={`/testimonial/${testimonial.id}`}>
                  <button className="btn-learn-more">Read More</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;
