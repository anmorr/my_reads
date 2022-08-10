import * as BooksAPI from "../BooksAPI";

const Book = ({ imageURL, title, authors, bookshelf, books, setBooks, id }) => {
  const addBook = async (book, shelf) => {
    const res = await BooksAPI.update(book, shelf);
  };

  const selectionHandler = (selection) => {
    const newBook = {
      id: id,
      title: title,
      authors: authors,
      imageURL: imageURL,
      shelf: selection,
    };
    addBook(newBook, selection);
  };
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${imageURL})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              onChange={(e) => selectionHandler(e.target.value)}
              defaultValue={bookshelf ? bookshelf : "none"}
            >
              <option value="placeholder" disabled>
                Move to...
              </option>
              {/* { !bookshelf === "currentlyReading" ? 
                <option value="currentlyReading" selected>Currently Reading</option> : */}
              <option value="currentlyReading">Currently Reading</option>
              {/* } */}
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
          {authors ? authors.join("\r\n") : ""}
        </div>
      </div>
    </li>
  );
};

export default Book;
