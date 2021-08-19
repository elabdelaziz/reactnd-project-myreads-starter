import React from 'react';
import BookDisplay from './bookDisplay';


const BookRows = (props) => {
  const { books, shelfCategory, changeShelf }  = props
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
export default BookRows;