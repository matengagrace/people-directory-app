import React from 'react'
import { useNavigate } from 'react-router'


function UserCard({user}) {
    const navigate = useNavigate();

  return (
    <div className='w-[150px] h-[180px] rounded-2xl p-1 bg-[#9e9999] gap-1 grid grid-cols-1 items-center justify-start shadow-[0_0_4px_2px_rgb(44,42,42)] transition-all duration-1000 hover:scale-110'>
        <div className="w-[80px] h-[80px] mx-auto rounded-full overflow-hidden">
            <img src={`/images/${user.photo}`} alt="user profil" className='w-full' />
        </div>
        <h4 className='text-[14px] font-black'>{user.name}</h4>
        <p className='text-[12px] text-[#2c2a2a]'>{user.email}</p>  
        <button onClick={()=>navigate(`/user-detail/${user.id}`)} className='w-[60%] mx-auto btn_primary hover:bg-inherit hover:border hover:border-black hover:text-black'>Afficher</button>
    </div>
  )
}

export default UserCard