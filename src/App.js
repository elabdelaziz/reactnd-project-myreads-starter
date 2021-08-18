import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import  Search  from './search'
import CategoryRows from './categoryRows'

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
    BooksAPI.getAll().then(books => this.setState({ books }));
  }
  

  requestShelfUpdate = (bookToUpdate, newShelf) => {
    BooksAPI.update(bookToUpdate, newShelf).then(() => {
      BooksAPI.getAll().then(books => this.setState({ books }));
     })
   }
   
  render() {
    // console.log(books)
    console.log(this.state.books)
    return (
      
        <div className="app">
          <Search setSearchPage={this.setSearchPage} />
          <CategoryRows books={this.state.books} changeShelf={this.requestShelfUpdate}/>

        )
      </div>
    )
  }
}

export default BooksApp
