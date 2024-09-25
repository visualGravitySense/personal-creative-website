import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import './LoginRegister.css';
// import '../styles/forms.scss';

const Login = ({ theme }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  



  return (
    <section className={`login-register ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="form-container">
              <h2>{isLogin ? "Contact Form" : "Register"}</h2>
              <Form>
                {!isLogin && (
                  <>
                    <Form.Group controlId="formName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group controlId="formLastName">
                      <Form.Label>Message</Form.Label>
                      <Form.Control type="text" placeholder="Your Message" />
                    </Form.Group>
                  </>
                )}
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Введите пароль" />
                </Form.Group>
                <Button className="btn-submit" type="submit">
                  {isLogin ? "Contact" : "Register"}
                </Button>
              </Form>
              <Button className="toggle-btn" onClick={toggleForm}>
                {isLogin ? "Create new account" : "Alredi registered? Login"}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
