import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../../features/search/searchSlice';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import './NavbarStyle.css';
import { Link } from 'react-router-dom';
import { RootState } from '../../app/store';
import logo from '../../assets/images/postapp.png';

function NavbarComponent() {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: RootState) => state.search);
  const favouritePosts = useSelector((state: RootState) => state.favourites.items);

  const [favoriteCount, setFavoriteCount] = useState(0);

  useEffect(() => {
    setFavoriteCount(favouritePosts.length);
  }, [favouritePosts]);

  const handleChangeSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    dispatch(setSearchQuery(newValue));
  };

  return (
    <div className='ms-5 me-5 '>
      <Navbar bg='transparent' variant='white' expand='lg'>
        <Link to="/" className='custom-link mt-1'>
          <Navbar.Brand>Home</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Link to="/counter" className='custom-link mt-2 me-3'>Counter</Link>
          </Nav>
          <div className='logo'>
         <Link to="/"><img  src={logo} alt="Logo" style={{ maxWidth: '150px' }} /></Link> 
          </div>
          <div className='d-flex ms-auto'>
            <Link to='/favourites' className='text-danger mx-5 mt-2 pointer'>
              <i id='favourites' className="bi bi-heart">
                {favoriteCount > 0 && <span className="badge bg-danger position-absolute">{favoriteCount}</span>}
              </i>
            </Link>
            <Form className='d-flex glass'>
              <FormControl
                type='text'
                placeholder='Cerca post per titolo'
                value={searchQuery}
                onChange={handleChangeSearchQuery}
                className='transparent-input'
              />
              <button className="btn btn-outline-transparent" type='submit'><i className="bi bi-search"></i></button>
            </Form>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>

  );
}

export default NavbarComponent;

