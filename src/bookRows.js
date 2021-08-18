import React, { Component } from 'react';
import UpdateShelf from './updateShelf';

class BookRows extends Component {
    render() { 
        const { books, shelfCategory, changeShelf }  = this.props
        return (

            
          <ol className="books-grid">

            {books.map((book) => {
              const bookName = book.title
              const bookImg = book.imageLinks.thumbnail
              const authors = book.authors

              // console.log(shelfCategory)
              // console.log(book.shelf)
            if (book.shelf !== shelfCategory) {
                return undefined;
            }
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
              
            })}
          </ol>
            
        )
        }
}
export default BookRows;