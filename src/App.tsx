import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/common/NavbarComponent';
import HomePage from './pages/HomePage';
import { Counter } from './pages/Counter';
import FooterComponent from './components/common/FooterComponent';
import Favourites from './pages/Favourites';
import PostPage from './pages/PostPage';

function App() {
  return (
    <Router>
          <div className="background"></div>
          <NavbarComponent />
          <Routes>
            <Route path="/counter" element={<Counter />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/post/:postId" element={<PostPage/>} />
          </Routes>
          <FooterComponent/>
    </Router>
  );
}

export default App;
