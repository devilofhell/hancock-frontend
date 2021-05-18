import React, { useState, useEffect } from "react";

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

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [newUser, setNewUser] = useState(initialState);

  useEffect(() => {}, [newUser]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setNewUser({ ...newUser, [name]: value });
  };

  const handleOnSubmit = (e) => {
    console.log(newUser);
  };

  return (
    <Container>
      <Nav justify variant="tabs" defaultActiveKey="/register">
        <Nav.Item>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/register">Register</Nav.Link>
        </Nav.Item>
      </Nav>

      <br />

      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Col>
            <Form.Label>Nur dein Vorname wird öffentlich angezeigt.</Form.Label>
          </Col>
        </Row>
        <Row xs={1} md={2}>
          <Col>
            <Form.Group controlId="firstName">
              <Form.Control
                type="text"
                name="firstName"
                value={newUser.firstName}
                onChange={handleOnChange}
                placeholder="Vorname"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="lastName">
              <Form.Control
                type="text"
                name="lastName"
                value={newUser.lastName}
                onChange={handleOnChange}
                placeholder="Nachname"
              />
            </Form.Group>
          </Col>
        </Row>
        <br />
        <Form.Label>
          Du kannst dich nur dieses Wochenende registrieren. Du bekommst nach
          dem Wochenende eine E-Mail mit einem Link zu dieser Webseite und hast
          anschließend vollen Zugriff auf alle Features.
        </Form.Label>
        <Row>
          <Col>
            <Form.Group controlId="register-email">
              <Form.Control
                type="email"
                name="email"
                value={newUser.email}
                onChange={handleOnChange}
                placeholder="example@mail.com"
              />
            </Form.Group>
            <Form.Group controlId="register-password">
              <Form.Control
                type="password"
                name="password"
                value={newUser.password}
                onChange={handleOnChange}
                placeholder="Passwort"
              />
            </Form.Group>
            <Form.Group controlId="register-password-confirm">
              <Form.Control
                type="password"
                name="confirmPassword"
                value={newUser.confirmPassword}
                onChange={handleOnChange}
                placeholder="Passwort bestätigen"
              />
            </Form.Group>

            <Button>Registrieren</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Register;
