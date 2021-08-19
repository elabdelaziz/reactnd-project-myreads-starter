import React from 'react';
import UpdateShelf from './updateShelf';

const BookDisplay = (props) => {
    const {book, changeShelf} = props

    if (!book.imageLinks || !book.authors) {
        return null;
    }
    const bookName = book.title
    const bookImg = book.imageLinks.thumbnail
    const bookAuthors = book.authors

    return (
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookImg})` }}></div>
                <UpdateShelf book={book} changeShelf={changeShelf}/>
            </div>
              <div className="book-title">{bookName}</div>
              {bookAuthors.map((author, id) => (
                  <div className="book-authors" key={id}>{author}</div>
              ))}
          </div>
        </li>
    );
}
export default BookDisplay;