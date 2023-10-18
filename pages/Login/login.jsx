import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import Navbar from '../../components/navbar/navbar';

function Login() {
  const navigate = useNavigate();
  const[massage, setMasage] = useState('')
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/login', { name, password });
      console.log('Login successful', response.data.token);
      console.log(response.status)
      if(response.status == 200){
        localStorage.setItem('jwt-token', response.data.token);
        console.log(response.data.token)
        navigate(`/home`);
      }
      //
    } catch (error) {
      console.log(error);
      setMasage("User name or Password is incorrect")
      console.log(massage)
    }
  };

  return (
    <div>
      <Navbar/>
      <div className='m-5'>
        <h2 className='ms-5 mt-5'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='ms-5 mb-3'>
            <label className='form-label'>Username: </label>
            <input className='form-control' type="text" value={name} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className='ms-5 mb-3'>
            <label className='form-label'>Password: </label>
            <input className='form-control' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="btn btn-primary m-5"type="submit">Login</button>
        </form>
        <div><p>{massage}</p></div>
      </div>
    </div>
  );
}

export default Login;
