import React from 'react'

function SearchBar({setSearchUser}) {
    
  return (
    <div className='search-container'>
        <input type="text" placeholder='Recherche...' onChange={(e)=>{setSearchUser(e.target.value)}}/>
    </div>
  )
}

export default SearchBar