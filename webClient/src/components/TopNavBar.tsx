import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

interface Props {

}

export const TopNavBar: React.FC<Props> = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Navbar.Brand href="/" className="text-primary">FatKatChat</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/search">Search</Nav.Link>
          <Nav.Link href="/addmedia">Add Media</Nav.Link>
          <Nav.Link href="/messages">Messages</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}