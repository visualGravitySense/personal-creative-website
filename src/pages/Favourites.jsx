import React from 'react';
import { Button } from 'react-bootstrap';
import Profile from "../components/Profile"; 
import './Favourites.css';

const Favourites = ({ theme }) => {
  const favouriteCourses = [
    {
      title: 'React JS',
      instructor: 'React Instructor',
      price: '49 ',
    },
    {
      title: 'Graphick Design',
      instructor: 'UX Designer',
      price: '39 €',
    },
    {
      title: 'Junior Web Designer',
      instructor: 'Web Developer',
      price: '49 €',
    },
    {
      title: 'UX UI Design',
      instructor: 'UX Designer',
      price: '39 €',
    },
    {
      title: 'React JS Next',
      instructor: 'Web Developer',
      price: '49 €',
    },
    {
      title: 'Web Design',
      instructor: 'Web Developer',
      price: '39 €',
    },
    // Добавьте другие избранные курсы
  ];

  return (
    <section className={`favourites-section ${theme === 'dark' ? 'dark-mode' : ''}`}>

      <Profile />
      <h2>Favourites</h2>
      <div className="favourite-courses">
        {favouriteCourses.length > 0 ? (
          favouriteCourses.map((course, index) => (
            <div key={index} className="favourite-card">
              <h3>{course.title}</h3>
              <p>Teacher: {course.instructor}</p>
              <p>Price: {course.price}</p>
              <Button className="btn-remove">Remove from list</Button>
            </div>
          ))
        ) : (
          <p>No favoutites courses.</p>
        )}
      </div>
      <Button className="btn-checkout">Go to check out</Button>
    </section>
  );
};

export default Favourites;
