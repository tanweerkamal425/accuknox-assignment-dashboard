import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
        <div className="header-left">
            <ul>
                <li>Home</li>
                <li>Dashboardv2</li>
            </ul>
        </div>
        <div className="header-right">
            <div className="search-box">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" className='search' placeholder='Search widget...' />
            </div>
        </div>
    </div>
  )
}

export default Header