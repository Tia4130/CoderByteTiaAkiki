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
    const [totalMatches, setTotalMatches] = useState(0);

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

    const countMatches = (text, search) => {
        if (!search) return 0;

        const regex = new RegExp(`(${search})`, "gi");
        const matches = text.match(regex);
        return matches ? matches.length : 0;
    };

    const filteredBooks = book.filter(
        book =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        let matches = 0;
        filteredBooks.forEach(book => {
            matches += countMatches(book.title, searchTerm);
            matches += countMatches(book.content, searchTerm);
        });
        setTotalMatches(matches);
    }, [searchTerm, filteredBooks]);

    return (
        <div>
            <h1 className='text-middle'>Search any book you want</h1>
            <div>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <p className='text-middle'><span className='bold-text'>{totalMatches} posts </span> where found</p>
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