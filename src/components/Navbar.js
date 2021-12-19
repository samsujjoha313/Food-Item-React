import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <div className="main-div d-flex justify-content-md-around bg-dark text-white">
        <div className="header "><h3>Samsujjoha</h3></div>
        
        <div className="link-div d-flex">
        <ul>
        <li><NavLink className="nav"  to="/home">Home</NavLink></li>
        <li><NavLink className="nav" to="/about">About</NavLink></li>
        <li><NavLink className="nav" to="/services">Services</NavLink></li>
        <li><NavLink className="nav" to="/information">Information</NavLink></li>

        <li><NavLink className="nav" to="/contact">Contact</NavLink></li>
        </ul>
        
        </div>
        </div>
            
        </>
    )
}

export default Navbar
