import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Slogan } from "../components/Slogan";

import { LoginForm } from "../components/LoginForm";

const Login = () => {
  return (
    <Container className="p-5 signup-container">
      <Row className="bg-dark  p-5 rounded ">
        <Col className="slogan">
          <Slogan />
        </Col>
        <Col>
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
};
export default Login;
