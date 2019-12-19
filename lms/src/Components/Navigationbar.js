import React from 'react';
import '../App.css';
import { Button, Navbar, Nav, Form, FormControl} from 'react-bootstrap';

function Navigationbar() {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand>City School Library</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Catalog</Nav.Link>
          <Nav.Link href="/issue">Issue</Nav.Link>
          <Nav.Link href="/reservations">Reservations</Nav.Link>
          <Nav.Link href="/students">Students</Nav.Link>
          <Nav.Link href="/return">Return</Nav.Link>
        </Nav>
          <Nav.Link href="#logout" className="Logout" data-rb-event-key="#Logout">Logout</Nav.Link>
      </Navbar>
    );
  }
  
export default Navigationbar;