import React, { useEffect, useState } from 'react';
import { fetchItems } from '../services/api';

const ListItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems()
      .then(data => setItems(data.items))
      .catch(error => console.error('Failed to fetch items:', error));
  }, []);

  return (
    <div>
      <h2>Items List</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
