import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import data from "../data.json";
import UserCard from "../components/UserCard";

function Home() {
  const [users, setUsers] = useState([]);
  const [searchUser, setSearchUser] = useState("");

  useEffect(() => {
    setUsers(data);
  }, []);

  const userFiltered = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchUser.toLowerCase()) ||
      user.email.toLowerCase().includes(searchUser.toLowerCase()),
  );

  return (
    <div className="w-full bg-inherit flex justify-center items-center">
      <div className="w-[80%] grid grid-cols-1 justify-center items-center gap-10">
        <h2 className="mx-auto text-center font-bold pt-5 text-[25px]">
          Liste des Utilisateurs
        </h2>
        <SearchBar setSearchUser={setSearchUser} />

        <div className="w-full h-auto p-2.5 gap-5 grid grid-cols-2 justify-center items-center rounded-[10px] mx-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {userFiltered.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
