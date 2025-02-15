import React, { useState } from 'react';

interface ListGroupProps {
  items: string[];
}

// create a new listgroup functional component
function ListGroup({ items }: ListGroupProps) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleClick = (item: string) => {
    console.log(item);
    setSelectedItem(item);
  };

  return (
    <div>
      <h2>Places to Visit in Bangladesh</h2>
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