import React, { useEffect, useState } from 'react';
import './PopularCourses.css';
import './AboutSection.scss';

const PopularCourses = ({ theme }) => {
  // const imageUrl = 'https://via.placeholder.com/800x400'; // Example image URL
  const [courses] = useState([
    {
      title: 'Crypto Dashboard',
      instructor: 'Dmitri Gornakov',
      description: 'A web application built on React and Bootstrap that allows users to track cryptocurrencies in real time.',
      image: '/src/assets/crypto-data.png',
    },
    {
      title: 'Creative Portfolio',
      instructor: 'Dmitri Gornakov',
      description: 'A personal project presenting my work as a Creative Technologist.',
      image: '/src/assets/creative-portfolio.png',
    },
    {
      title: 'Telegram Bot for Design Tips',
      instructor: 'Dmitri Gornakov',
      description: 'Telegram bot sends users daily design tips, links to useful resources, and inspirational materials.',
      
      image: '/src/assets/digo-bot.png',
    },
    // {
    //   title: 'Beauty Courses Website',
    //   instructor: 'Dmitri Gornakov',
    //   description: 'A website developed for a beauty training center, featuring course filtering, user management, and subject sections.',
    //   image: '/src/assets/digo-bot.png',
    // },
    // {
    //   title: 'Main Management System',
    //   instructor: 'Dmitri Gornakov',
    //   description: 'A showcase of my work as a Creative Technologist.',
    //   image: 'https://via.placeholder.com/800x400',
    // },
    // {
    //   title: 'Website for Artists',
    //   instructor: 'Dmitri Gornakov',
    //   description: 'A portfolio website designed for artists and designers includes a social media integration.',
      
    //   image: '/src/assets/digo-bot.png',
    // },
  ]);

  return (
    <section className={`popular-courses ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <h2>My Projects</h2>
      <div className="courses-list">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            
          <img
            src={course.image}
            alt="About my projects"
            className="about-image"
          />
        
            <h3>{course.title}</h3><br></br>
            <p>{course.description}</p>
            {/* <p>Рейтинг: {course.rating}</p>
            <p>Студентов: {course.students}</p>
            <p>Цена: {course.price}</p> */}
            <button className="btn-learn-more">Discover</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCourses;
