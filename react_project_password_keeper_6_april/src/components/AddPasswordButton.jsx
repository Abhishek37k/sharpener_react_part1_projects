import React, { useContext } from "react";
import './AddPasswordButton.css'
import { PasswordContext } from "../context/PasswordContext";

const AddPasswordButton = () => {
  const { setEditingPassword } = useContext(PasswordContext);

  return (
    <button className="add-btn" onClick={() => setEditingPassword({})}>
      Add New Password
    </button>
  );
};

export default AddPasswordButton;
