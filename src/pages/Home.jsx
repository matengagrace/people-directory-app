import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import data from "../data.json";
import UserCard from "../components/UserCard";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(data);
  }, []);

  const recherche = (term) => {
    const results = users.filter(
      (user) =>
        user.name.toLowerCase().includes(term.toLowerCase()) ||
        user.email.toLowerCase().includes(term.toLowerCase())
    );
    setUsers(results);
  };

  return (
    <div className="main-container">
      <h2>Liste des Utilisateurs</h2>
      <SearchBar onSearch={recherche} />

      <div className="user-list">
        {users.map((user, index) => (
          <UserCard user={user}  index={index}/>
        ))}
       
      </div>
    </div>
  );
}

export default Home;
