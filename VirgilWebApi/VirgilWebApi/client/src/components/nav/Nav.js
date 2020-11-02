import React, {useContext} from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {UserProfileContext} from "../apiManager/UserProfileApi";

const AppNav = () => {
  const {logOut, isLoggedIn} = useContext(UserProfileContext);

let user = sessionStorage.getItem("id");

    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Virgil</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      {user &&
      <>  
      
      <Nav.Link href="/account">Account</Nav.Link>
      <Nav.Link href="/collection">Collection</Nav.Link>
      <Nav.Link href="/category">Category</Nav.Link>
       <Nav.Link href="/book">Books</Nav.Link>
      <Nav.Link href="/" onClick={logOut}>Logout</Nav.Link>
     
      </>
      }

      {!user && 
      <>
    <Nav.Link href="/login">Log In</Nav.Link> 
     
      </>}
    </Nav>
   
    
  </Navbar.Collapse>
</Navbar>
    )
}


export default AppNav;

