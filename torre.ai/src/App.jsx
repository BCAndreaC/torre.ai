import { useState } from 'react'
import './App.css'
import { SearchBar } from './components/SearchBar'

function App() {

  return (
    <>
      <div className='App'>
        <div className='search-bar_container'>
          <SearchBar />
           <div>search-results</div>
        </div>
      </div>
    </>
  )
}

export default App
