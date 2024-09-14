import React from 'react'

//CSS
import '../css/home.css';

//COMPONENTS
import SearchBar from './SearchBar';

function Home() {
    return (
        <div >

            <h1>Search any book you want</h1>

            <div className='container'>
                <SearchBar />
            </div>

        </div>
    )
}

export default Home