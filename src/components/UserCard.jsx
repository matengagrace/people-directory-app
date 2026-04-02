import React from 'react'
import { useNavigate } from 'react-router'


function UserCard({user}) {
    const navigate = useNavigate();

  return (
    <div className='w-[150px] h-[180px] rounded-2xl p-1 bg-[#9e9999] gap-1 grid grid-cols-1 items-center justify-start'>
        <div className="w-[80px] h-[80px] mx-auto rounded-full overflow-hidden">
            <img src={`/images/${user.photo}`} alt="user profil" className='w-full' />
        </div>
        <h4 className='text-[14px] font-black'>{user.name}</h4>
        <p className='text-[12px] text-[#2c2a2a]'>{user.email}</p>  
        <button onClick={()=>navigate(`/user-detail/${user.id}`)} className='w-[60%] mx-auto bg-black text-white py-1 px-[14px] outline-0 border-0 rounded-[10px] cursor-pointer text-[14px] hover:bg-inherit hover:border hover:border-black hover:text-black'>Afficher</button>
    </div>
  )
}

export default UserCard