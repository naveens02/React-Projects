import React, { useState } from 'react';
import {  Input, Button } from 'antd';
import './App.css';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const ListItem = ({ item, deleteItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(item ? item.title : '');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleDeleteClick = () => {
    deleteItem();
  };

  return (
    <li className="list-item">
      <div>
        {isEditing ? (
          <Input className="editbox"
            value={editedTitle}
            onChange={handleInputChange}
          />
        ) : (
          <span>{item.title}</span>
        )}
      </div>
      <div className="list-item-buttons">
        {isEditing ? (
          <Button className="save-button" onClick={handleSaveClick} type="primary">
            Save
          </Button>
        ) : (
          <div>
            <Button className="edit-button" onClick={handleEditClick}>
              <EditOutlined />
            </Button>
            <Button className="delete-button" onClick={handleDeleteClick} danger>
              <DeleteOutlined />
            </Button>
          </div>
        )}
      </div>
    </li>
  );
};

export default ListItem;
