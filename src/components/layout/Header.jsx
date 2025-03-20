import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { IoLogOutSharp } from "react-icons/io5";
import { HiOutlineLogin } from "react-icons/hi";
import { FaFilePen } from "react-icons/fa6";
import { MdDashboardCustomize } from "react-icons/md";
import { useUser } from "../../context/UserContext";
export const Header = () => {
  const { user, setUser } = useUser();
  const handleOnLogout = () => {
    //3. On Logout click, remove token from local storage.
    localStorage.removeItem("accessJWT");

    // 4. setUser state to empty string
    setUser({});
  };
  return (
    <Navbar expand="lg" variant="dark" className="bg-body-dark">
      <Container>
        <Navbar.Brand href="#home">Tyrionix</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                <Nav.Link as={Link} to="/dashboard">
                  <MdDashboardCustomize /> Dashboard
                </Nav.Link>
                <Nav.Link onClick={handleOnLogout} as={Link} to="/">
                  <IoLogOutSharp /> Logout
                </Nav.Link>
              </>
            ) : (
              <>
                {" "}
                <Nav.Link as={Link} to="/signup">
                  <FaFilePen /> Sign Up
                </Nav.Link>
                <Nav.Link as={Link} to="/">
                  <HiOutlineLogin /> Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
