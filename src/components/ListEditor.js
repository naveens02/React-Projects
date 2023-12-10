

import React, { useState } from 'react';

const ListEditor = ({ addNewItem }) => {
  const [newItemDescription, setNewItemDescription] = useState('');

  const handleAddItem = () => {
    addNewItem(newItemDescription);
    setNewItemDescription('');
  };

  return (
    <div className="ListEditor"> 
      <input
        className="todo-input" 
        placeholder="Item Description"
        value={newItemDescription}
        onChange={(e) => setNewItemDescription(e.target.value)}
      />
      <button className="todo-btn" onClick={handleAddItem}> 
        Add Item
      </button>
    </div>
  );
};

export default ListEditor;
