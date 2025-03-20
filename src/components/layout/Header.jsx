import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { IoLogOutSharp } from "react-icons/io5";
import { HiOutlineLogin } from "react-icons/hi";
import { FaFilePen } from "react-icons/fa6";
import { MdDashboardCustomize } from "react-icons/md";
export const Header = () => {
  return (
    <Navbar expand="lg" variant="dark" className="bg-body-dark">
      <Container>
        <Navbar.Brand href="#home">Tyrionix</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/signup">
              <FaFilePen /> Sign Up
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              <HiOutlineLogin /> Login
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard">
              <MdDashboardCustomize /> Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              <IoLogOutSharp /> Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
