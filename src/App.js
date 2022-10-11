import React from 'react'
import { Header } from './components/Header'
import './App.css'
import { Footer } from './components/Footer'
import { Search } from './components/Search'

const App = () => {
  return (
    <>
      <div>
      <Header  />
    </div>
    <div>
      <Search  />
    </div>
    <div>
      <Footer  />
    </div>
    </>
  )
}

export default App

