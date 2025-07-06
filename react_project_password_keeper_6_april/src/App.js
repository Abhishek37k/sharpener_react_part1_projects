import React, { useContext } from "react";
import { PasswordProvider, PasswordContext } from "./context/PasswordContext";
import PasswordList from "./components/PasswordList";
import AddPasswordButton from "./components/AddPasswordButton";
import PasswordModal from "./components/PasswordModal";
import SearchBar from "./components/SearchBar";
import "./App.css";

const AppContent = () => {
  const { editingPassword, setEditingPassword } = useContext(PasswordContext);

  return (
    <div className="App">
      <h1>Password Keeper</h1>

      <AddPasswordButton />
      <SearchBar />

      <PasswordList />
      {editingPassword !== null && (
        <PasswordModal onClose={() => setEditingPassword(null)} />
      )}
    </div>
  );
};

const App = () => (
  <PasswordProvider>
    <AppContent />
  </PasswordProvider>
);

export default App;
