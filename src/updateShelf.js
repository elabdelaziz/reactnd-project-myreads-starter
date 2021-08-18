import React, { Component } from 'react';
 
class UpdateShelf extends Component {
    render() { 

        const {book, changeShelf} = this.props

        const updateShelfApi = e => {
            changeShelf(book, e.target.value)
        }
        return ( 
            <div className="book-shelf-changer">
                <select onChange={updateShelfApi} defaultValue={'move'}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
         );
    }
}
 
export default UpdateShelf;