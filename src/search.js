import React from 'react';
import { Link } from 'react-router-dom'
import BookDisplay from './bookDisplay'

const Search = (props) => {
    const {onFilterTextChange, displayedBooks, changeShelf, searchedQuery, displayError} = props
    const inputChangeHandler = (e) => {
        onFilterTextChange(e.target.value);            
    }
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link
                    to='/'
                    className="close-search"
                    >Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input type="text" 
                        placeholder="Search by title or author"
                        value={searchedQuery}
                        onChange={inputChangeHandler}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {displayError === true && (
                        <div>
                            <h2>Your search didn't match any books</h2>
                        </div>
                    )}
                    {displayError === false && (
                        displayedBooks.map(b => {
                            return (
                                <BookDisplay
                                    book={b}
                                    changeShelf={changeShelf}
                                    key={b.id}
                                />
                            )
                        })
                    )}
                </ol>
            </div>
        </div>
    );
}
 
export default Search;
