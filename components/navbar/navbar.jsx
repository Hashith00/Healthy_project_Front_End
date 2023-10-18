import './navbar.css'
import React from 'react'

import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
        <img className='logo' src='src\assets\Minimalist_Logo_for_Hospital_and_Medical_Health-removebg-preview.png'></img>
        <Link className='navbar-brand' href="#" to="/">Home</Link>
        
    </div>
  )
}

export default Navbar