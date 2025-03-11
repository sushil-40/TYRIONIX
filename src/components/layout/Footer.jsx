import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <Container fluid className="bg-dark py-3">
      <Row className="text-center">
        <Col>
          &copy; Copy right all reserved. || Made by: <a href="">Sushil</a>
        </Col>
      </Row>
    </Container>
  );
};
