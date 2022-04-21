import BookShelf from './BookShelf'
import { useState } from 'react';
import Header from './Header'
import Footer from './Footer'

const BookShelves = ({ 
    books,
    setBooks
}) => {

    const filterBooksByBookshelf = (bookshelf) => {
        const newArray = books.filter(function( obj ) {
            return obj.shelf !== bookshelf
        });
        return newArray;
    }


    return (
        <div className="list-books">
          <Header />
            <div className="list-books-content">
                <div>
                    <BookShelf setBooks={setBooks} books={books} bookshelfFilter={"currentlyReading"} bookshelfName={"Currently Reading"} />
                    <BookShelf setBooks={setBooks} books={books} bookshelfFilter={"wantToRead"} bookshelfName={"Want To Read"}/>
                    <BookShelf setBooks={setBooks} books={books} bookshelfFilter={"read"} bookshelfName={"Read"} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BookShelves;