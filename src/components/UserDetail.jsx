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
    <div className="w-[80%] grid grid-cols-1 justify-center items-center mx-auto">
      <div className="w-full h-[40px] mt-[30px]">
        <button className="bg-black text-white py-1 px-[14px] outline-0 border-0 rounded-[10px] cursor-pointer text-[14px]"
          onClick={() => {
            navigate("/");
          }}
        >
          Retour
        </button>
      </div>
      <h1 className="my-5 mx-auto text-[30px] font-bold">Details de l'utilisateur</h1>

      <div className="w-full lg:w-[60%] h-[60vh] rounded-[20px] p-5 md:p-1.5 bg-[#9e9999] grid items-center justify-start md:gap-5 mx-auto md:w-[80%] md:flex lg:w-[60%] ">
        <div className="w-[300px] h-[300px] ml-[25px] rounded-[30px] overflow-hidden">
          <img src={`/images/${user.photo}`} alt="user profil" className="w-full" />
        </div>
        <div className="grid items-center text-center md:text-left">
          <h4 className="text-[25px] font-bold lg:text-[30px]">{user.name}</h4>
          <p className="font-[20px]">{user.email}</p>
          <p className="font-[20px]">{user.telephone}</p>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
