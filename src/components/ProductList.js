import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import './App.css';
import axios from 'axios'; 

const ProductList = () => {
  const [newItemDescription, setNewItemDescription] = useState('');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setItems(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const addNewItem = () => {
    if (newItemDescription) {
      const newItem = { title: newItemDescription };
      setItems([...items, newItem]);
      setNewItemDescription('');
    }
  };

  const deleteItem = (itemIndex) => {
    const updatedItems = [...items];
    updatedItems.splice(itemIndex, 1);
    setItems(updatedItems);
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>

      {loading ? (
        <p>Loading data...</p>
      ) : (
        <ul>
          {items.map((item, itemIndex) => (
            <ListItem
              key={itemIndex}
              item={item}
              deleteItem={() => deleteItem(itemIndex)}
            />
          ))}
        </ul>
      )}

      <div className="input-container">
        <input
          className="todo-input"
          placeholder="Item Description"
          value={newItemDescription}
          onChange={(e) => setNewItemDescription(e.target.value)}
        />
        <button className="todo-btn" onClick={addNewItem}>
          Add Item
        </button>
      </div>
    </div>
  );
};

export default ProductList;
