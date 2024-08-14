import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="container">
        <div className="wrapper">
            <div className="header">
                <p className="header-title">CNAPP Dashboard</p> 
                <div className="header-right">
                    <button className='widget-button'>+Add Widget</button>
                </div>           
            </div>
        </div>
    </div>
  )
}

export default Header