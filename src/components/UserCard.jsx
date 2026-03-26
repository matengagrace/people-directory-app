import React from 'react'
import { useNavigate } from 'react-router'


function UserCard({user}) {
    const navigate = useNavigate();

  return (
    <div className='user-card'>
        <div className="photo-container">
            <img src={`/images/${user.photo}`} alt="user profil" />
        </div>
        <h4>{user.name}</h4>
        <p>{user.email}</p>  
        <button onClick={()=>navigate(`/user-detail/${user.id}`)}>Afficher</button>
    </div>
  )
}

export default UserCard