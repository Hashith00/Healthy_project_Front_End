import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import { Link } from 'react-router-dom'

function Noaccount() {
  return (
    <div className='m-3'>
        <h2 >Your account is successfully deleted</h2>
        <Link className='mt-2 btn btn-dark' to='/'>Go to Home</Link>
    </div>
  )
}

export default Noaccount