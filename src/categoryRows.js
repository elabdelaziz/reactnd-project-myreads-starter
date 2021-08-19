import React from 'react';
import BookRows from './bookRows';
import { Link } from 'react-router-dom'

const CategoryRows = props => {
    const {books, changeShelf} = props
    const rowCategories = [
      { category: 'currentlyReading' },
      { category: 'wantToRead' },
      { category: 'read' }
    ];

    return ( 
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {rowCategories.map((row, index) => {
                        return (
                            <div className="bookshelf" key={index}>
                                <h2 className="bookshelf-title">{row.category}</h2>
                                <div className="bookshelf-books">
                                        <BookRows books={books} shelfCategory={row.category} changeShelf={changeShelf}/>
                                </div>
                            </div>
                        )
                    })}
                    <div className="open-search">
                        <Link 
                            to='/search'
                            className='openSearch-link'
                            >Add a book
                        </Link>
                    </div>
                </div>
            </div>
        </div>
     );
}  
export default CategoryRows