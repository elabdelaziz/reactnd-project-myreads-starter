import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import  Search  from './search'
import CategoryRows from './categoryRows'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchedQuery: '',
    displayedBooks: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  handleFilterTextChange = (filterText) => {
    this.setState({
      searchedQuery: filterText
    });

    BooksAPI.search(this.state.searchedQuery, 20).then(queryBook => {
      // console.log(displayedBooks)
      queryBook === undefined || queryBook.length === 0 ?
      this.setState({ displayedBooks: [] }) :
      this.setState({ displayedBooks:  queryBook})
      
  })
  }


  requestShelfUpdate = (bookToUpdate, newShelf) => {
    BooksAPI.update(bookToUpdate, newShelf).then(() => {
      BooksAPI.getAll().then(books => this.setState({ books }));
     })
   }
   
   
  render() {
    // BooksAPI.search('b',20).then(books => console.log(books))
    // console.log(this.state.displayedBooks)
    // console.log(this.state.searchedQuery)
    return (
        <div className="app">
          <Route exact path='/' render={() => (
            <CategoryRows books={this.state.books} changeShelf={this.requestShelfUpdate}/>
          )}/>
          <Route exact path='/search' render={() => (
            <Search onFilterTextChange={this.handleFilterTextChange}
             displayedBooks={this.state.displayedBooks} 
             changeShelf={this.requestShelfUpdate}
             searchedQuery={this.props.searchedQuery}
             />
          )}/>
      </div>
    )
  }
}
export default BooksApp
