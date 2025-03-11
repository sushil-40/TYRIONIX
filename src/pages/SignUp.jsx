import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Slogan } from "../components/Slogan";
import { SignUpForm } from "../components/SignUpForm";

const SignUp = () => {
  return (
    <Container className="p-5 signup-container">
      <Row className="bg-dark  p-2 rounded">
        <Col className="slogan" md={6}>
          <Slogan />
        </Col>
        <Col>
          <SignUpForm />
        </Col>
      </Row>
    </Container>
  );
};
export default SignUp;
