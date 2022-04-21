import Book from './Book'
import { useState } from 'react'

const BookShelf = ( {books, bookshelfName, setBooks, bookshelfFilter} ) => {

    const currentlyReadingArray = books.filter(function( obj ) {
        return obj.shelf ===  bookshelfFilter
    });

    return (

        <div className="bookshelf">
                <h2 className="bookshelf-title">{bookshelfName}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                      {currentlyReadingArray.map((book) => {
                          return (
                              <Book
                                id={book.id}
                                key={book.title}
                                imageURL={book.imageLinks.smallThumbnail  ? book.imageLinks.smallThumbnail : book.imageLinks.thumbnail}
                                title={book.title}
                                authors={book.authors}
                                setBooks={setBooks}
                                books={books}
                                bookshelf={book.shelf}
                            />
                          )
                      })}
                  </ol>
                </div>
              </div>
    )
}

export default BookShelf;