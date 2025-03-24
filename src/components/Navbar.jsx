import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import "../App.css";

function CustomNavbar() {
  return (
    <Navbar bg="white" variant="dark" expand="lg" className="fixed-navbar" >
      <Container className="custom-navbar">
        <Navbar.Brand href="/" className="navbar-brand">
          <img
            src="src\assets\logo-black.png"
            width="20%"
            height="20%"
            className="d-inline-block align-top"
            alt="TEDX EJUST Logo"
          />
        </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="/about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="/booking" className="nav-link-custom">Booking</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
