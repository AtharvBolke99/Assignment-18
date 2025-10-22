import React from 'react'
import "./Navbar.css";
import logo from "./logo.png";

function Navbar() {
  return (
    <div className='navbar'>
        <div className="sub-navbar">
        <img className='logo' src = {logo}/>
        <h2 className='logo-name'>PlayNApps</h2>
        </div>
        <div className="menu-bar">
        <a className='menu' href="/">Home</a>
        <a className='menu' href="/Apps">Apps</a>
        <a className='menu' href="/Games">Games</a>
        </div>
    </div>
  )
}

export default Navbar
