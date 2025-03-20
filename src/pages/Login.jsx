import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { LoginForm } from "../components/LoginForm";
import { BsGraphUpArrow } from "react-icons/bs";
import { useUser } from "../context/UserContext";

const Login = () => {
  // const data = useUser();
  // const { user, setUser } = useUser();
  // console.log(data);
  return (
    <Container className="p-5 signup-container">
      <Row className="bg-dark  p-5 rounded ">
        <Col>
          <LoginForm />
        </Col>
        <Col className="login">
          <div
            className="d-flex flex-column justify-content-center fs-1"
            style={{
              height: "100%",
            }}
          >
            <div className="text-center text-info" style={{ fontSize: "5rem" }}>
              <BsGraphUpArrow />
            </div>
            <div className="text-warning">
              Master Your Inventory, Master Your Business
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Login;
