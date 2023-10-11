import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/common/Navbar';
import HomePage from './pages/HomePage';
import { Counter } from './pages/Counter';

function App() {
  return (
    <Router>
          <NavbarComponent />
          <Routes>
            <Route path="/counter" element={<Counter />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
    </Router>
  );
}

export default App;
