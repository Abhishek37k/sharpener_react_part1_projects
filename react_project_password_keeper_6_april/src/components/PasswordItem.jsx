import React, { useContext } from "react";
import { PasswordContext } from "../context/PasswordContext";
import "./PasswordItem.css";

const PasswordItem = ({ item }) => {
  const { deletePassword, setEditingPassword } = useContext(PasswordContext);

  const handleEdit = () => {
    setEditingPassword(item);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this password?")) {
      deletePassword(item.id);
    }
  };

  return (
    <div className="password-item">
      <div className="password-details">
        <p><strong>Website:</strong> {item.website}</p>
        <p><strong>Username:</strong> {item.username}</p>
        <p><strong>Password:</strong> {item.password}</p>
      </div>
      <div className="password-actions">
        <button onClick={handleEdit} className="edit-btn">Edit</button>
        <button onClick={handleDelete} className="delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default PasswordItem;
