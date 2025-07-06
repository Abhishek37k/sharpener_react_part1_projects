import React, { useContext } from "react";
import { PasswordContext } from "../context/PasswordContext";
import PasswordItem from './PasswordItem'

const PasswordList = () => {
  const { passwords, searchTerm } = useContext(PasswordContext);

  const filtered = passwords.filter((item) =>
    `${item.website} ${item.username}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filtered.length > 0 ? (
        filtered.map((item) => <PasswordItem key={item.id} item={item} />)
      ) : (
        <p>No matching passwords found.</p>
      )}
    </div>
  );
};

export default PasswordList;
