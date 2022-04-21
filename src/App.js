import './App.css';
import SearchPage from './components/SearchPage'
import BookShelves from './components/BookShelves'
import { useState, React, useEffect } from "react";
import { Routes, Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

function App() {

  
  

  const [books, setBooks] = useState([])

  

  useEffect(() => {

    const getAllBooks = async () => {
      const res = await BooksAPI.getAll()
      setBooks(res)
    }

    getAllBooks()

  }, [books])
           
                
      


  return (
      <Routes>
        <Route exact path="/" element={
          <BookShelves 
          books={books}
          setBooks={setBooks}
          />
        }/>
        <Route path="/search-page" element={
          <SearchPage 
          books={books}
          setBooks={setBooks}
          />
        }/>
    </Routes>
    
  );
}

export default App;
