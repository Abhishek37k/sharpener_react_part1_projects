import React, { useContext } from "react";
import { PasswordContext } from "../context/PasswordContext";
import "./SearchBar.css";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContext(PasswordContext);

  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search by website or username..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
