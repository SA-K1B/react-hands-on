import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';

function Home() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User logged out successfully');
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div>
      <h1>Welcome To Bangladesh</h1>
      {currentUser && (
        <>
          <h2>Hi {currentUser.email}</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}

export default Home;