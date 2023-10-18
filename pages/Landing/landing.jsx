import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import Navbar from '../../components/navbar/navbar'
import './landing.css'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div>
        <Navbar/>
        <div className='main-section'>
          <div className='semi-section'>
            <h1 className='heading'>Say Hello to Your <br></br>Fitness Partner</h1>
            <p className='text'>Healthy app give track your health status and give you<br></br> helaths suggetions according to you</p>
            <Link className='btn btn-primary ms-5' to="/login">Login</Link>
            <Link className='btn btn-primary ms-2' to="/signup">Sign Up</Link>
          </div>
          <div className='semi-section image-cover'></div>

        </div>
    </div>
  )
}

export default Landing