import React from 'react'

function Search() {
  return (
    <div className="flex items-center"> 
      <label for="search" className="px-3 inline">SEARCH</label>
                    <input type="text" id="searchTerm" className="bg-pink-200 rounded-md p-2 text-chocolate inline" placeholder="e.g. roses"/>
    </div>

  )
}

export default Search
