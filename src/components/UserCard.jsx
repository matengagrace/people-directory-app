import React from 'react'
import profil2 from "../assets/profil2.jpg"
import profil3 from "../assets/profil3.jpg"
import profil4 from "../assets/profil4.jpg"
import profil5 from "../assets/profil5.jpg"
import profil6 from "../assets/profil6.jpg"
import profil7 from "../assets/profil7.jpg"
import profil8 from "../assets/profil8.jpg"
import profil9 from "../assets/profil9.jpg"
import profil10 from "../assets/profil10.jpg"
import { useNavigate } from 'react-router'


function UserCard({user,index}) {
    const navigate = useNavigate();

    const photos  = [profil2,profil3,profil4,profil5,profil6,profil7,profil8,profil9,profil10]
  return (
    <div className='user-card'>
        <div className="photo-container">
            <img src={photos[user.id-1]} alt="user profil" />
        </div>
        <h4>{user.name}</h4>
        <p>{user.email}</p>  
        <button onClick={()=>navigate(`/user-detail/${index}`,user)}>afficher</button>
    </div>
  )
}

export default UserCard