import React from 'react'
import './Header.css'

const Header = ({setShowSidebar}) => {

  return (
    <div className="header">
        <p className="header-title">CNAPP Dashboard</p> 
        <div className="header-right">
            <button onClick={() => setShowSidebar(true)} className='widget-button'>Add Widget +</button>
        </div>           
    </div>
  )
}

export default Header