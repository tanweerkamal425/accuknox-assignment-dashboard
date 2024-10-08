import React, {useState} from 'react'
import './Navbar.css'

const Navbar = ({setSearchInput}) => {
    const [menu, setMenu] = useState('dashboard')
    const handleChange = (event) => {
        setSearchInput(event.target.value);
    }

    return (
        <div className="navbar">
            <ul className="navbar-menu">
                <li onClick={() => { setMenu('home')}} className={menu==='home' ? 'active' : ''}>Home</li>
                <li onClick={() => { setMenu('dashboard')}} className={menu==='dashboard' ? 'active' : ''}>Dashbard v2</li>
            </ul>
            <div className="navbar-right">
                <div className="search-box">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input onChange={handleChange} type="text" placeholder='Search anything...' />
                </div>
            </div>
        </div>
    )
}

export default Navbar