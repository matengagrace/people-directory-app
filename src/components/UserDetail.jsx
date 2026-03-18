import React, { useState, useEffect, useId } from "react";
import { useNavigate, useParams } from "react-router";
import data from "../data.json";
import profil2 from "../assets/profil2.jpg";
import profil3 from "../assets/profil3.jpg";
import profil4 from "../assets/profil4.jpg";
import profil5 from "../assets/profil5.jpg";
import profil6 from "../assets/profil6.jpg";
import profil7 from "../assets/profil7.jpg";
import profil8 from "../assets/profil8.jpg";
import profil9 from "../assets/profil9.jpg";
import profil10 from "../assets/profil10.jpg";

function UserDetail() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const userId = useParams();
  const photos = [
    profil2,
    profil3,
    profil4,
    profil5,
    profil6,
    profil7,
    profil8,
    profil9,
    profil10,
  ];

  useEffect(() => {
    setUsers(data);
  }, []);

  const userDetail = () => {
    // const newuser = ;
    setUser(users.filter((u) =>u.id == userId.id));
  };

  useEffect(() => {
    userDetail();
  }, [user]);

  console.log(user);

  return (
    <div className="detail-container">
      <div className="retour">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Retour
        </button>
      </div>
      <h1>Details de l'utilisateur</h1>

      <div className="user-detail">
        <div className="photo-detail">
          <img src={photos[userId.id]} alt="user profil" />
        </div>
        <div className="detail-infos">
          <p>id: {userId.id}</p>
          <h4>Pacifique Lavis</h4>
          <p>Pacifique@gmail.com</p>
          <p>65025541</p>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;


