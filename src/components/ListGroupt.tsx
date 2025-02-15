import React, { useState } from 'react';

// create a new listgroup functional component
function ListGroup() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const items = [
    'Sundarban',
    'Coxs Bazar',
    'Sajek Valley',
    'Gazipur',
    'Mymensingh',
    'Chapainawabganj',
    'Rangamati',
  ];

  const handleClick = (item: string) => {
    console.log(item);
    setSelectedItem(item);
  };

  return (
    <div>
      {items.length === 0 ? (
        <p>No items found</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index} onClick={() => handleClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
      {selectedItem && <p>Selected Item: {selectedItem}</p>}
    </div>
  );
}

export default ListGroup;