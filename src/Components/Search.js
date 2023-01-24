import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {

  function handleChange(event) {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="flex justify-start items-center gap-3 bg-slate-800 p-3 rounded w-full">
      <span className="material-symbols-outlined opacity-50">
        search
      </span>
      <input type="text" value={searchTerm} onChange={handleChange} className="text-sm bg-transparent outline-0 w-full" placeholder="Search Movies & TV Shows..." />
    </div>
  )
}

export default Search;