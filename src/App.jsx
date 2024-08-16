import React, { useState, useEffect, useContext } from 'react'
import './App.css'
import DashBoard from './pages/dashboard/DashBoard'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Category from './components/Category/Category'
import Sidebar from './components/Sidebar/Sidebar'
import { StoreContext } from './context/StoreContext'

const App = () => {
  // const [items, setItems] = useState([...data.categories]);
  const [showSidebar, setShowSidebar] = useState(false);
  const {categories} = useContext(StoreContext);
  const [sidebarMenu, setSidebarMenu] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  console.log(searchInput);

  return (
    <>
      <div className="app">
        <Navbar setSearchInput={setSearchInput} />
      </div>
      <div className="container">
        <div className="wrapper">
          <Header setShowSidebar={setShowSidebar} />
          {
            categories.map((item, i) => {
              return <Category setSidebarMenu={setSidebarMenu} setShowSidebar={setShowSidebar} key={i} category={item} />
            })
          }
        </div>
      </div>
      {showSidebar ? <Sidebar menu={sidebarMenu} setShowSidebar={setShowSidebar} /> : <></>}
    </>
  )
}

export default App