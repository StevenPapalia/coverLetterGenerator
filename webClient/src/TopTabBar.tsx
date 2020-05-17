import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

import 'react-bootstrap';

const TopTabBar: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Navbar.Brand href="#home">FatKatChat</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#search">Search</Nav.Link>
          <Nav.Link href="#addmedia">Add Media</Nav.Link>
          <Nav.Link href="#messages">Messages</Nav.Link>
          <Nav.Link href="#profile">Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopTabBar;