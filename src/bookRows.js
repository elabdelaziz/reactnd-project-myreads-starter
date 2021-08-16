import React, { Component } from 'react';

class BookRows extends Component {
    render() { 
        const { books, shelfCategory }  = this.props
        return (

            
          <div>
            {books.map((book) => {
              const bookName = book.title
              const bookImg = book.imageLinks.thumbnail
              const authors = book.authors

            //   console.log(shelfCategory)
            if (book.shelf === shelfCategory) {
                return (
                    <li>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookImg})` }}></div>
                            <div className="book-shelf-changer">
                                <select>
                                  <option value="move" disabled>Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                                </select>
                              </div>
                          <div className="book-title">{bookName}</div>
                          <div className="book-authors">{authors}</div>
                        </div>
                      </div>
                    </li>
                );
            }
            else {
              return undefined;
            } 
              
            })}
          </div>
            
        )
        }
}
export default BookRows;