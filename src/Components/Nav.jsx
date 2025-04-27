import React from 'react'
import './Nav.css'
import logo from '../assets/logo.png'

const Nav = () => {
  return (
    <>
    <div className="nav">
        <div className="logo">
            <img  src={logo} alt="" />
        </div>
        <div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        
    </div>
    </>
  )
}

export default Nav