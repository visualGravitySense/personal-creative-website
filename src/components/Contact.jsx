import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
// import './Profile.css';
// import './Footer.scss';
import { FaGithub , FaTelegram, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = ({ theme }) => {
  const [editing, setEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'Dmitri Gornakov',
    email: 'dmitri.gornakov@gmail.com',
    courses: [
        { title: 'GitHub', progress: 'visualGravitySense', link: 'https://github.com/visualGravitySense', icon: <FaGithub /> },
        { title: 'LinkedIn', progress: 'Dmitri Gornakov', link: 'https://www.linkedin.com/in/dmitri-gornakov-7a664840/', icon: <FaLinkedin /> },
        // { title: 'Twitter', progress: 'visualGravitySense', link: 'https://twitter.com/yourprofile', icon: <FaTwitter /> },
        { title: 'Telegram', progress: 'Digo: Creative Technologist Blog', link: 'https://t.me/digoNews', icon: <FaTelegram /> },
      
   
    ],
  });

  const handleEditToggle = () => {
    setEditing(!editing);
    // sent email dmitri.gornakov@gmail.com
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <section className={`profile-section ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <h2>Contact</h2>

      <div className="profile-info">
        {!editing ? (
          <>
            <p><strong>Dmitri Gornakov</strong></p>
            <p>
                <strong>
                <a href="mailto:dmitri.gornakov@gmail.com">dmitri.gornakov@gmail.com</a>
                </strong>
            </p>
            {/* <p><strong>Имя:</strong> {userInfo.name}</p>
            <p><strong>Email:</strong> {userInfo.email}</p> */}
            {/* <Button className="btn-edit" onClick={handleEditToggle}>Редактировать профиль</Button> */}
          </>
        ) : (
          <>
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleInputChange}
              className="edit-input"
            />
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              className="edit-input"
            />
            <Button className="btn-save" onClick={handleEditToggle}>Сохранить</Button>
          </>
        )}
      </div>
    
      <h3>Follow Me On Social Media:</h3>
      <div className="user-courses">
        {userInfo.courses.length > 0 ? (
          userInfo.courses.map((course, index) => (
            <div key={index} className="course-card">
            <a href={course.link} aria-label={course.title} target="_blank" rel="noopener noreferrer" className="card-link">
              {course.icon} {/* Render the icon here */}
              <h4>{course.title}</h4>
              <p>{course.progress}</p>
            </a>
          </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default Contact;
