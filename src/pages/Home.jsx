import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import data from "../data.json";
import UserCard from "../components/UserCard";

function Home() {
  const [users, setUsers] = useState([]);
  const [searchUser,setSearchUser] = useState('');

  useEffect(() => {
    setUsers(data);
  }, []);

    const userFiltered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchUser.toLowerCase()) ||
        user.email.toLowerCase().includes(searchUser.toLowerCase())
    );

  return (
    <div className="main-container">
      <h2>Liste des Utilisateurs</h2>
      <SearchBar setSearchUser={setSearchUser} />

      <div className="user-list">
        {userFiltered.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
       
      </div>
    </div>
  );
}

export default Home;
