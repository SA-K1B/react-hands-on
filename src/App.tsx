import React from 'react';
import ListGroup from './components/ListGroup.tsx';

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
    <div>
      <ListGroup items={items} />
    </div>
  );
}

export default App;