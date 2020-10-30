import React, {useContext} from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {UserProfileContext} from "../apiManager/UserProfileApi";

const AppNav = () => {
  const {logOut, isLoggedIn} = useContext(UserProfileContext);
console.log(isLoggedIn);

    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Virgil</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      {!isLoggedIn ? null : <Nav.Link href="/category">Category</Nav.Link>}
      {!isLoggedIn ? <Nav.Link href="/login">Log In</Nav.Link> : <Nav.Link href="/" onClick={logOut}>Logout</Nav.Link>}
    </Nav>
   
    
  </Navbar.Collapse>
</Navbar>
    )
}


export default AppNav;

