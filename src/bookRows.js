import React, { Component } from 'react';
import BookDisplay from './bookDisplay';

class BookRows extends Component {
    render() { 
        const { books, shelfCategory, changeShelf }  = this.props
        return (
          <ol className="books-grid">
            {books.map((book) => {
            if (book.shelf !== shelfCategory) {
                return undefined;
            }
            return(
              <BookDisplay book={book} changeShelf={changeShelf} key={book.id}/>
            )  
            })}
          </ol>
        )
        }
}
export default BookRows;