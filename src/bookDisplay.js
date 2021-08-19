import React from 'react';
import UpdateShelf from './updateShelf';

const BookDisplay = (props) => {

    const {book, changeShelf} = props
    const bookName = book.title
    const bookImg = book.imageLinks.thumbnail
    const authors = book.authors

    return (
        <li key={book.authors}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookImg})` }}></div>
                <UpdateShelf book={book} changeShelf={changeShelf}/>
            </div>
              <div className="book-title">{bookName}</div>
              <div className="book-authors">{authors}</div>
            
          </div>
        </li>
    );
}
 
export default BookDisplay;