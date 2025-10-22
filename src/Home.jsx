import React from 'react'
import "./Home.css"
import Navbar from "./Navbar.jsx";

function Home() {
  return (
    <div>
        <Navbar />
        <h1 className='home-header'>Home</h1>
        <p className='home-content'>This is home page</p>
    </div>
  )
}

export default Home
