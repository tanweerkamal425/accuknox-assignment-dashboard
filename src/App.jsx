import React, { useState, useEffect } from 'react'
import './App.css'
import DashBoard from './pages/dashboard/DashBoard'
import data from '../data.json'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  const [items, setItems] = useState([...data.categories]);

  return (
    <>
      <div className="app">
        <Navbar />
      </div>
    </>
  )
}

export default App