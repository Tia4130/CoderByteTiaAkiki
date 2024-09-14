import React from 'react'

//CSS
import "../css/searchBar.css";

const SearchBar = ({ searchTerm, setSearchTerm }) => {

    const clearSearch = () => {
        setSearchTerm("");
    };

    return (
        <div className='searchContainer'>
            <input
                type='text'
                placeholder='Search...'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className='searchBar'
            />
            {searchTerm && (
                <button onClick={clearSearch} className='clearButton'>
                    &#x2715;
                </button>
            )}
        </div>
    )
}

export default SearchBar