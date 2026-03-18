import React from 'react'

function SearchBar({onSearch}) {
    
  return (
    <div className='search-container'>
        <input type="text" placeholder='Recherche...' onChange={(e)=>{onSearch(e.target.value)}}/>
    </div>
  )
}

export default SearchBar