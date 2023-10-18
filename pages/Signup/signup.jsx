import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import  { useState , useEffect} from 'react';
import axios from 'axios'
import jwtDecode from 'jwt-decode';
import Navbar from '../../components/navbar/navbar';



const Signup = () => {

    
    const [user, setuser] = useState([])
    const[endmassage, setEndmassage] = useState('')

     const [formData, setFormData] = useState({
        name: `${user.name}`,
        age: user.age,
        bloodSugar: user.bloodSugar,
        pressureLevel: user.pressureLevel,
        cholesterolLevel: user.cholesterolLevel
      });
    
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        handleRegister()
        console.log(formData);

      };
      
      const handleRegister = async () =>{
  
        try{
            const response = await fetch(`http://localhost:4000/api/users`, {
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
              });
              if (response.ok) {
                console.log('User Created successfully');
                setEndmassage('Account is created successfully.')
                
                
               
              } else {
                const data = await response.json();
                console.error('Error create user:', data.message);
                setEndmassage(data.message)
                
              }
        }
            catch (error) {
            console.error('Network error:', error);
            
            
          }
      
      }
      

    const param = useParams()
  return (
    <div >
      <Navbar/>
    <div className='m-5'>
      <h2 className='m-3'>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className='m-3'>
          <label htmlFor="name" className='form-label'>name:</label>
          <input
            className='form-control'
            type="text"
            id="name"
            name="name"
            
            onChange={handleChange}
            required
          />
        </div>
        <div className='m-3'>
          <label htmlFor="password" className='form-label'>Password:</label>
          <input
            className='form-control'
            type="password"
            id="password"
            name="password"
            
            onChange={handleChange}
            required
          />
        </div>
        <div className='m-3'>
          <label htmlFor="email" className='form-label'>Age:</label>
          <input
            className='form-control'
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className='m-3'>
          <label htmlFor="bloodSugar" className='form-label'>bloodSugar Level</label>
          <input
            className='form-control'
            type="number"
            id="bloodSugar"
            name="bloodSugar"
            value={formData.bloodSugar}
            onChange={handleChange}
            
          />
        </div>
        <div className='m-3'>
          <label htmlFor="pressureLevel" className='form-label'>pressureLevel</label>
          <input
            className='form-control'
            type="number"
            id="pressureLevel"
            name="pressureLevel"
            value={formData.pressureLevel}
            onChange={handleChange}
            
          />
        </div>
        <div className='m-3'>
          <label htmlFor="cholesterolLevel" className='form-label'>Cholesterol Level</label>
          <input
            className='form-control'
            type="number"
            id="cholesterolLevel"
            name="cholesterolLevel"
            value={formData.cholesterolLevel}
            onChange={handleChange}
            
          />
        </div>
        <button className='btn btn-primary m-3' type="submit">Register</button>
      </form>
      <div>
      <p>{endmassage}</p>
    </div>
    </div>
    </div>
  )
}

export default Signup