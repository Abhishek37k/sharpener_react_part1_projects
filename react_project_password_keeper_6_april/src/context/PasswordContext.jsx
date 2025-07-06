import React, { createContext, useState } from "react";

export const PasswordContext = createContext();

export const PasswordProvider = ({ children }) => {
  const [passwords, setPasswords] = useState([]);
  const [editingPassword, setEditingPassword] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const addPassword = (password) => {
    setPasswords([...passwords, password]);
  };

  const updatePassword = (updatedPassword) => {
    setPasswords(passwords.map(p =>
      p.id === updatedPassword.id ? updatedPassword : p
    ));
  };

  const deletePassword = (id) => {
    setPasswords(passwords.filter(p => p.id !== id));
  };

  return (
    <PasswordContext.Provider value={{
      passwords,
      addPassword,
      updatePassword,
      deletePassword,
      editingPassword,
      setEditingPassword,
      searchTerm,
      setSearchTerm,
    }}>
      {children}
    </PasswordContext.Provider>
  );
};
