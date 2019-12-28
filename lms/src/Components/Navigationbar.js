import React from 'react';
import '../App.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Navigationbar() {
    return (
      <Navbar bg="dark" variant="dark" className="sticky-top">
        <Navbar.Brand>City School Library</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Catalog</Nav.Link>
          <Nav.Link as={Link} to="/issue">Issue</Nav.Link>
          <Nav.Link as={Link} to="/reservations">Reservations</Nav.Link>
          <Nav.Link as={Link} to="/students">Students</Nav.Link>
          <Nav.Link as={Link} to="/return">Return</Nav.Link>
        </Nav>
          <Nav.Link href="#logout" className="Logout" data-rb-event-key="#Logout">Logout</Nav.Link>
      </Navbar>
    );
  }
  
export default Navigationbar;