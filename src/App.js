import React from 'react'
import SearchPage from './SearchPage';
import MainPage from './MainPage'
import './App.css'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
      <MainPage/>
      </div>
    )
  }
}

export default BooksApp
