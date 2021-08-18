import React from 'react';
import BookRows from './bookRows';

const CategoryRows = props => {
    const books = props.books;
    const changeShelf = props.changeShelf
    const shelfTypes = [
      { type: 'currentlyReading', title: 'Currently Reading' },
      { type: 'wantToRead', title: 'Want to Read' },
      { type: 'read', title: 'Read' }
    //   { type: 'none', title: 'none' }
    ];

    return ( 
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
        <div className="list-books-content">
            <div>
            {shelfTypes.map((shelf, index) => {

                const shelfCategory = shelf.type
                // console.log(shelfCategory)
                return (
                    <div className="bookshelf" key={index}>
                        <h2 className="bookshelf-title">{shelfCategory}</h2>
                        <div className="bookshelf-books">
                                <BookRows books={books} shelfCategory={shelfCategory} changeShelf={changeShelf}/>
                        </div>
                    </div>
                )
            })}
            
        </div>
        </div>
        </div>
     );
}  
export default CategoryRows