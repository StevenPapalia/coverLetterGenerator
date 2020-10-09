import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

interface Props { SetPage(page: number): void; }

export const TopTabBar: React.FC<Props> = ({ SetPage }) => {
  const setCurrentPage = (page: number) => { SetPage(page); }

  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Navbar.Brand className="text-primary">FatKatChat</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home" onClick={() => setCurrentPage(0)}>Home</Nav.Link>
          <Nav.Link href="#search" onClick={() => setCurrentPage(1)}>Search</Nav.Link>
          <Nav.Link href="#addmedia" onClick={() => setCurrentPage(2)}>Add Media</Nav.Link>
          <Nav.Link href="#messages" onClick={() => setCurrentPage(3)}>Messages</Nav.Link>
          <Nav.Link href="#profile" onClick={() => setCurrentPage(4)}>Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

);
}
