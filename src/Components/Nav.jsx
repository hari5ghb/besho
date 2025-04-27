import React, { useState } from 'react';
import '../Styles/Nav.css';
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
   

      <div className="nav">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Menu icon for mobile */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>

        {/* Nav Links */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
