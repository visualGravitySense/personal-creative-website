import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Profile.css';

const Contact = ({ theme }) => {
  const [editing, setEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'Алексей Петров',
    email: 'alexey@example.com',
    courses: [
      { title: 'GitHub', progress: 'visualGravitySense' },
      { title: 'LinkedIn', progress: 'Dmitri Gornakov' },
      { title: 'Twitter', progress: 'visualGravitySense' },
      { title: 'Telegram', progress: 'Dmitri Gornakov' }, //   https://t.me/digoNews
   
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
            <p><strong>dmitri.gornakov@gmail.com</strong></p>
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
              <h4>{course.title}</h4>
              <p>{course.progress}</p>
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
