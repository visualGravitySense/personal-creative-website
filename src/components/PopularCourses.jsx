import React, { useEffect, useState } from "react";
import "./PopularCourses.css";
import "./AboutSection.scss";
import { Link } from "react-router-dom";

import cryptoDataImage from "../assets/crypto-data.png"; // Импортируем изображение
import creativePortfolioImage from "../assets/creative-portfolio.png"; // Импортируем изображение
import digoBotImage from "../assets/digo-bot.png"; // Импортируем изображение

const posts = [
  { id: "uiux-ruin-product", title: "UI/UX Design Can Actually Ruin a Product" },
];

const PopularCourses = ({ theme }) => {
  // const imageUrl = 'https://via.placeholder.com/800x400'; // Example image URL
  const [courses] = useState([
    {
      title: "Crypto Dashboard",
      instructor: "Dmitri Gornakov",
      description:
        "A web application built on React and Bootstrap that allows users to track cryptocurrencies in real time.",
      image: cryptoDataImage,
      link: "https://github.com/visualGravitySense/crypto-data", // Ссылка для проекта
    },
    {
      title: "Creative Portfolio",
      instructor: "Dmitri Gornakov",
      description:
        "A personal project presenting my work as a Creative Technologist.",
      image: creativePortfolioImage,
      link: "https://github.com/visualGravitySense/my-personal-website", // Ссылка для проекта
    },
    {
      title: "Telegram Bot for Design Tips",
      instructor: "Dmitri Gornakov",
      description:
        "Telegram bot sends users daily design tips, links to useful resources, and inspirational materials.",
      image: digoBotImage,
      link: "https://github.com/visualGravitySense/bisonwise", // Ссылка для проекта
    },
  ]);

  return (
    <section
      className={`popular-courses ${theme === "dark" ? "dark-mode" : ""}`}
    >
      <h2>My Projects</h2>
      <div className="courses-list">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <img
              src={course.image}
              alt="About my projects"
              className="about-image"
            />

            <h3>{course.title}</h3>
            <br></br>
            <p>{course.description}</p>
            {/* <p>Рейтинг: {course.rating}</p>
            <p>Студентов: {course.students}</p>
            <p>Цена: {course.price}</p> */}
            <a href={course.link} target="_blank" rel="noopener noreferrer">
              <button className="btn-learn-more">Discover</button>
            </a>
          </div>
        ))}

        <div>
          <h1>Blog Posts</h1>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
