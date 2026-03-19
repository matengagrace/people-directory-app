import React from "react";
import { useNavigate, useParams } from "react-router";
import data from "../data.json";

function UserDetail() {
  const navigate = useNavigate();

  const { id } = useParams();

  const user = data.find((u) => u.id === parseInt(id));

  if (!user) {
    return (
      <div>
        <h2>Utilisateur non trouvé</h2>
      </div>
    );
  }

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
          <img src={`/images/${user.photo}`} alt="user profil" />
        </div>
        <div className="detail-infos">
          <h4>{user.name}</h4>
          <p>{user.email}</p>
          <p>{user.telephone}</p>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
