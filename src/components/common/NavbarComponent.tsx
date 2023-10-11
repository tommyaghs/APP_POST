import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../../features/search/searchSlice' // Assicurati di importare correttamente il tuo slice
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './NavbarStyle.css';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: any) => state.search);

  const handleSearch = () => {
    dispatch(setSearchQuery(searchQuery));
  };

  return (
    <Navbar bg='white' variant='white' expand='lg'>
      <Link to="/" className='custom-link mt-1'>
        <Navbar.Brand>Home</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Link to="/counter" className='custom-link mt-2 me-3'>Counter</Link>
        </Nav>
        <div className='d-flex ms-auto'>
          <Link  to='/favourites' className='text-danger mx-5 mt-2 pointer'><i className="bi bi-heart"></i></Link>
          <Form className='d-flex'>
            <FormControl
              type='text'
              placeholder='Cerca post per titolo'
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(setSearchQuery(e.target.value));
              }}
            />
            <Button variant='outline-dark' onClick={handleSearch}>
              Cerca
            </Button>
          </Form></div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;