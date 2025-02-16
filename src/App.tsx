import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
// import TouristSpot from './components/TouristPlace';
import ListGroup from './components/TouristPlace';
import styles from './components/Navbar.module.css';
import Tourists from './components/Tourists';
import { AuthProvider, useAuth } from './contexts/AuthContext';

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
    <AuthProvider>
      <Router>
        <nav className={styles.navbar}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/tourist-spot">Tourist Spot</Link>
            </li>
            <li>
              <Link to="/tourists">Tourists</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/tourist-spot" element={<ListGroup items={items} />} />
          <Route path="/tourists" element={<ProtectedTourists />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

const ProtectedTourists: React.FC = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <div>Please log in to view this page.</div>;
  }

  return <Tourists />;
};

export default App;