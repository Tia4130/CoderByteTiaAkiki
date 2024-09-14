import React from 'react'

//CSS
import "../css/searchBar.css";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div>
            <input
                type='text'
                placeholder='Search...'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "20px",
                    fontSize: "16px"
                }}
            />
        </div>
    )
}

export default SearchBar