import { React, } from 'react';
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import {useState} from 'react'
import Book from './Book';

const SearchPage = ({ 
    setBooks,
    books
    }) => {

    const [searchResults, setSearchResults] = useState([])

    const [query, setQuery] = useState("");

    const updateQuery = (query) => {
        setQuery(query.trim());
    }

    const searchForBook = (query) => {
        if (query) {
            setQuery(query)
            // console.log("query: ", query)
            setSearchResults([])
            const search = async () => {
                try {
                    const res = await BooksAPI.search(query, 100)
                    if (res.error && res.error === 'empty query') {
                        setSearchResults([])
                    }else {
                    setSearchResults(res)
                    // console.log("searchResults: ", searchResults)
                    }
                    
                } catch (e) {
                    console.log(e)
                }
            }
            search();
            
        } else {
            setSearchResults([])
            clearQuery();
        }
    }
    const clearQuery = () => (
        updateQuery("")
    )


    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search">
                Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={query}
                onChange={(event) => searchForBook(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
                {searchResults.map((book) => {
                return (
                    <Book
                    key={book.id}
                    imageURL={book.imageLinks ? book.imageLinks.smallThumbnail: "../..public/book_image.png"}
                    title={book.title}
                    setBooks={setBooks}
                    books={books}
                    bookshelf={book.bookshelf}
                    authors={book.authors}
                    id={book.id}
                />
                )
            })}
            </ol>
            
          </div>
        </div>
    )
}

export default SearchPage;