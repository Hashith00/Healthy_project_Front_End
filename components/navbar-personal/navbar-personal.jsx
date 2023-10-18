import React from 'react'
import { Link } from 'react-router-dom'
import './navbar-personal.css'

function handleLogout(){
    //const jwt = localStorage.removeItem('jwt-token')
}

function NavbarPersonal() {
  return (
    <div>
        <div className="navbar">
        <Link href="#" to="/" onClick={handleLogout()} >Logout</Link>
        
    </div>
    </div>
  )
}

export default NavbarPersonal