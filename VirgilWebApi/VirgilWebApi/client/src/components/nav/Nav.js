import React from 'react';
import {Navbar, Nav, NavDropdown, Button, FormControl, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const AppNav = () => {


    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/login">Log In</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

    )
}


export default AppNav;

