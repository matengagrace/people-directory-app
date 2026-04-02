import React from 'react'

function SearchBar({setSearchUser}) {
    
  return (
    <div className='w-full flex items-center justify-center'>
        <input className='w-full  h-6.25 border-0 outline-0 rounded-[30px] bg-[#9b9999] text-black pl-5 md:w-[60%] lg:w-[40%]' type="text" placeholder='Recherche...' onChange={(e)=>{setSearchUser(e.target.value)}}/>
    </div>
  )
}

export default SearchBar