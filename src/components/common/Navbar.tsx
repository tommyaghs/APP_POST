import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './NavbarStyle.css';

function CustomNavbar() {
  return (
    <Navbar bg="white" variant="white" expand="lg">
      <Link to="/" className='custom-link'>
        <Navbar.Brand>Post-App</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/counter" className='custom-link mt-2 me-3'>Counter</Link>
          {/* <Link to="/counter" className='custom-link mt-2 me-3'>Counter</Link>
          <Link to="/counter" className='custom-link mt-2'>Counter</Link> */}
        </Nav>
        <Form className='d-flex ms-auto'>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <Button variant="outline-dark">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
