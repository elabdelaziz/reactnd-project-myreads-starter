import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import  Search  from './search'
import Home from './home'

class BooksApp extends React.Component {
  state = {
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  setSearchPage = (searchPageState) => this.setState({showSearchPage: searchPageState})

  componentDidMount() {
    // get books on load
    BooksAPI.getAll().then(books => this.setState({ books }));
  }
  

  render() {

    return (
      
        <div>
          <Search setSearchPage={this.setSearchPage} />
          <Home setSearchPage={this.setSearchPage} />
        )
      </div>
    )
  }
}

export default BooksApp
