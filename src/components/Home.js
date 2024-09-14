import React, { useEffect, useState } from 'react'

//CSS
import '../css/home.css';

//COMPONENTS
import SearchBar from './SearchBar';

//DATA
import bookData from "../data/data.json";

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [book, setBook] = useState([]);

    //get the bookData:
    useEffect(() => {
        setBook(bookData);
    }, []);

    console.log("book:", book);

    const highlightSearchTerm = (text, search) => {
        if (!search) return text;

        const regex = new RegExp(`(${search})`, "gi");

        return text.split(regex).map((part, index) =>
            part.toLowerCase() === search.toLowerCase() ? <mark key={index}>{part}</mark> : part
        );
    };

    const filteredBooks = book.filter(
        book =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1 className='text-middle'>Search any book you want</h1>
            <div>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                {filteredBooks.length > 0 ? (
                    filteredBooks.map(book => (
                        <div key={book.id} style={{ marginBottom: "20px" }}>
                            <h2>{highlightSearchTerm(book.title, searchTerm)}</h2>
                            <p>{highlightSearchTerm(book.content, searchTerm)}</p>
                        </div>
                    ))
                ) : (
                    <p>No Book Found</p>
                )}
            </div>
        </div>
    )
}

export default Home