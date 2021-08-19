import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import  Search  from './search'
import CategoryRows from './categoryRows'
import { Route } from 'react-router-dom'
import ErrorBoundary from './errorBoundary'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchedQuery: '',
    displayedBooks: [],
    displayError: false
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  handleFilterTextChange = (filterText) => {
    this.setState({
      searchedQuery: filterText
    });

    if (!this.state.searchedQuery) {
      this.setState({ displayedBooks: [], displayError: false })
    }
    else {
      BooksAPI.search(this.state.searchedQuery, 20).then(queryBook => {
        queryBook.error?
        this.setState({ displayedBooks: [], displayError: true }) :
        this.setState({ displayedBooks:  queryBook, displayError: false})

        !this.state.searchedQuery && this.setState({ displayedBooks: [], displayError: false })
        
    }).catch(error => {
      this.setState({
        displayedBooks: [],
        displayError: true
      })
      console.log(error, this.state.displayError)
    })
    }
    
  }

  requestShelfUpdate = (bookToUpdate, newShelf) => {
    BooksAPI.update(bookToUpdate, newShelf).then(() => {
      BooksAPI.getAll().then(books => this.setState({ books }));
     })
   }
   
  render() {
    return (
        <div className="app">
          <Route exact path='/' render={() => (
            <CategoryRows books={this.state.books} changeShelf={this.requestShelfUpdate}/>
          )}/>
          <Route exact path='/search' render={() => (
            <ErrorBoundary>
              <Search onFilterTextChange={this.handleFilterTextChange}
              displayedBooks={this.state.displayedBooks} 
              changeShelf={this.requestShelfUpdate}
              searchedQuery={this.props.searchedQuery}
              displayError={this.state.displayError}
              />
            </ErrorBoundary>
            )}/>
      </div>
    )
  }
}
export default BooksApp
