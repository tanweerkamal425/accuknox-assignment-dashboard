import React, {useState} from 'react'
import './Navbar.css'

const Navbar = () => {
    const [menu, setMenu] = useState('home')

    return (
        <div className="navbar">
            <ul className="navbar-menu">
                <li onClick={() => { setMenu('home')}} className={menu==='home' ? 'active' : ''}>Home</li>
                <li onClick={() => { setMenu('dashboard')}} className={menu==='dashboard' ? 'active' : ''}>Dashbard v2</li>
            </ul>
            <div className="navbar-right">
                <div className="search-box">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder='Search anything...' />
                </div>
            </div>
        </div>
    )
}

export default Navbar