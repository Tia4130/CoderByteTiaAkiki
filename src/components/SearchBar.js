import React from 'react'

//CSS
import "../css/searchBar.css";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className='searchContainer'>
            <input
                type='text'
                placeholder='Search...'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className='searchBar'
            />
        </div>
    )
}

export default SearchBar