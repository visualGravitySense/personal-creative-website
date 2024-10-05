import React from "react";
import { useParams } from "react-router-dom";
import "./TestimonialDetail.scss";

const testimonials = [
  {
    id: 1,
    name: "UI/UX design can actually ruin a product",
    content:
      "Today, UI/UX design is considered an integral part of a successful product. In pursuit of perfect interfaces...",
    fullContent: "However, sometimes focusing too much on design details can lead to losing the product's core essence and functionality. A great user interface is important, but if it distracts from solving the main problem or complicates the user journey, the product may fail in the long term...",

    image: "/src/assets/uiux-bugs.jpeg",
  },
  {
    id: 2,
    name: "Miro and Obsidian to work effectively on projects",
    content:
      "In the world of creative technologies, where every detail and idea matters...",
    fullContent: "In today's fast-paced, creativity-driven world, Miro and Obsidian are gaining popularity as indispensable tools for brainstorming, project management, and note-taking. By integrating them into workflows, teams can improve efficiency, foster collaboration, and achieve their goals faster.",

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
          {/* <img
            src={testimonial.image}
            alt={testimonial.name}
            className="testimonial-image"
          /> */}
          <h1>{testimonial.name}</h1>
          <p>{testimonial.content}</p>
          {/* <p className="full-content">{testimonial.fullContent}</p>  */}
        </>
      ) : (
        <p>Testimonial not found.</p>
      )}
    </div>
  );
};

export default TestimonialDetail;
