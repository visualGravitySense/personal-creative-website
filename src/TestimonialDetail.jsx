import React from "react";
import { useParams } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    name: "Why UI/UX design can actually ruin a product",
    content:
      "Today, UI/UX design is considered an integral part of a successful product. In pursuit of perfect interfaces...",
    image: "/src/assets/uiux-bugs.jpeg",
  },
  {
    id: 2,
    name: "Miro and Obsidian to work effectively on projects",
    content:
      "In the world of creative technologies, where every detail and idea matters...",
    image: "/src/assets/miro-obsidian.jpeg",
  },
];

const TestimonialDetail = () => {
  const { id } = useParams();
  const testimonial = testimonials.find((t) => t.id === parseInt(id));

  return (
    <div className="testimonial-detail">
      {testimonial ? (
        <>
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="testimonial-image"
          />
          <h1>{testimonial.name}</h1>
          <p>{testimonial.content}</p>
        </>
      ) : (
        <p>Testimonial not found.</p>
      )}
    </div>
  );
};

export default TestimonialDetail;
