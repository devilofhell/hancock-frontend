import React from "react";

import "./Authenticate.css";

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  ButtonGroup,
  Nav,
} from "react-bootstrap";

function Login() {
  return (
    <Container>
      <Nav justify variant="tabs" defaultActiveKey="/login">
        <Nav.Item>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/register">Register</Nav.Link>
        </Nav.Item>
      </Nav>
      <Row>
        <Col>
          <br />
          <Form.Group controlId="login-email">
            <Form.Control type="email" placeholder="example@mail.com" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="login-password">
            <Form.Control type="password" placeholder="password" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button>login</Button>
        </Col>
      </Row>
    </Container>
  );
  {
    /*<div className="auth">
      <div className="auth__container">
        <div className="auth__header">
          <p>Login</p>
          <p>Register</p>
        </div>

        <div className="auth__login">
          <div className="auth__credentials">
            <input />
            <input />
          </div>
          <button>Login</button>
        </div>
        <div className="auth__register">
          <div className="auth__registerName">
            <input />
            <input />
          </div>

          <div className="auth__credentials">
            <input />
            <input />
            <input />
          </div>
          <button>Register</button>
        </div>
      </div>
    </div>*/
  }
}

export default Login;
