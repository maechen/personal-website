import './App.scss'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import Home from './pages'


function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
}

export default App
