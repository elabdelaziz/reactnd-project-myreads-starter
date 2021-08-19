import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BookDisplay from './bookDisplay'

class Search extends Component {
    render() {
        const {onFilterTextChange, displayedBooks, changeShelf, searchedQuery} = this.props
        // console.log(displayedBooks)
        // console.log(searchedQuery)
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
                            {displayedBooks !== undefined   && 
                                displayedBooks.filter(book => book !== undefined || book.length !== 0).map(b => {
                                    if (b === undefined) {
                                        return undefined
                                    }
                                    return (
                                        <BookDisplay
                                        book={b}
                                        changeShelf={changeShelf}
                                        key={b.id}
                                        />
                                    )
                                })
                            }
                            
                        </ol>
                    </div>
                </div>
         );
    }
}
 
export default Search;
