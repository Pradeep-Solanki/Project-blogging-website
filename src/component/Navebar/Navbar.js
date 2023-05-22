import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src="./" alt="The BLog" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Programming Lang." id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">C/C++</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Python</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Java</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">JavaScript</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Other</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Machine_Learning">Machine Learning</Nav.Link>
            <Nav.Link href="#Deep_learning">Deep learning</Nav.Link>
            <Nav.Link href="#DSA">DSA</Nav.Link>
            <Nav.Link href="#CS_Subjects">CS Subjects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
