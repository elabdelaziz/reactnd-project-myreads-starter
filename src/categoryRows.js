import React from 'react';
import BookRows from './bookRows';

const CategoryRows = props => {
    const books = props.books;
    const shelfTypes = [
      { type: 'currentlyReading', title: 'Currently Reading' },
      { type: 'wantToRead', title: 'Want to Read' },
      { type: 'read', title: 'Read' }
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
                                <BookRows books={books} shelfCategory={shelfCategory}/>
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