import React from "react";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
export default function CollapsibleNavbar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className=" bg-body-tertiary list">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <a className="navbar-brand" href="#">
              <img
                src="C:\SUCCESS\image\Logo-removebg-preview.png"
                width="100"
                height="30"
                alt=""
              />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features" className="color">
                About Us
              </Nav.Link>
              <Nav.Link href="#pricing">Write</Nav.Link>
              <NavDropdown title="Contents" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Sign In</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button variant="outline-success" size="sg">
                  Get Started
                </Button>{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
