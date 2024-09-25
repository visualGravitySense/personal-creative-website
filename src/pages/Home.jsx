import React from 'react';
import HeroSection from "../components/HeroSection";  
import FeaturedCourses from "../components/FeaturedCourses";  
import CourseCategories from "../components/CourseCategories";    
import PopularCourses from "../components/PopularCourses";    
import PromoBanners from "../components/PromoBanners";
import AboutSection from "../components/AboutSection";
import StudentTestimonials from "../components/StudentTestimonials";
import './Home.scss';


const Home = ({ theme, toggleTheme }) => {
  return (
    <div className={`home-page ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <HeroSection theme={theme} toggleTheme={toggleTheme} />
      <AboutSection theme={theme} />
      <PopularCourses theme={theme} />
      <PromoBanners theme={theme} />
      <StudentTestimonials theme={theme} />
      {/* <FeaturedCourses theme={theme} toggleTheme={toggleTheme} /> */}
      {/* <CourseCategories theme={theme} /> */}
      {/* Promo blocks, banners, platform info, etc. */}
    </div>
  );
};

export default Home;

