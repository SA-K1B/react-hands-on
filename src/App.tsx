import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import TouristSpot from './components/TouristPlace';
import ListGroup from './components/ListGroupt';

function App() {
  const items = [
    'Sundarban',
    'Coxs Bazar',
    'Sajek Valley',
    'Gazipur',
    'Mymensingh',
    'Chapainawabganj',
    'Rangamati',
  ];

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/tourist-spot">Tourist Spot</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tourist-spot" element={<TouristSpot />} />
      </Routes>
    </Router>
  );
}

export default App;