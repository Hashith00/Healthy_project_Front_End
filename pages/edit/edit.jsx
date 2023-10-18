import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import  { useState , useEffect} from 'react';
import axios from 'axios'
import jwtDecode from 'jwt-decode';
import NavbarPersonal from '../../components/navbar-personal/navbar-personal';


const Edit = () => {

  const jwt = localStorage.getItem('jwt-token')
  const user1 = jwtDecode(jwt)
  console.log(user1.userId)
    
    const [user, setuser] = useState([])
    const[endmassage, setEndmassage] = useState('')
    useEffect(()=>{
    
        const fechdata = async () => {
          try{
          
            const res = await axios.get(`http://localhost:4000/api/users/${user1.userId}`)
            setuser(res.data)
            console.log(user.name)
            
          }catch (error){
            console.log(error)
          }
          }
          const user = fechdata()
           
      }, [])
      



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
        handleUpdate()
        console.log(formData);

      };
      
      const handleUpdate = async () =>{
  
        try{
            const response = await fetch(`http://localhost:4000/api/users/${user1.userId}`, {
                method: 'PUT', 
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
              });
              if (response.ok) {
                console.log('User updated successfully');
                setEndmassage('User updated successfully')
                
                
               
              } else {
                const data = await response.json();
                console.error('Error updating user:', data.message);
                setEndmassage(data.message)
                
              }
        }
            catch (error) {
            console.error('Network error:', error);
            
            
          }
      
      }
      

    const param = useParams()
  return (
    <div>
        <NavbarPersonal/>
        <div>
      <h2 className='m-5'>Edit Details</h2>
      <form className='m-5' onSubmit={handleSubmit}>
        <div >
          <label className='form-label' htmlFor="name">name:</label>
          <input
            className='form-control'
            type="text"
            id="name"
            name="name"
           
            onChange={handleChange}
            
          />
        </div>
        <div>
          <label className='form-label' htmlFor="email">Age:</label>
          <input
            className='form-control'
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            
          />
        </div>
        <div>
          <label className='form-label' htmlFor="bloodSugar">bloodSugar Level</label>
          <input
            className='form-control'
            type="number"
            id="bloodSugar"
            name="bloodSugar"
            value={formData.bloodSugar}
            onChange={handleChange}
            
          />
        </div>
        <div>
          <label className='form-label' htmlFor="pressureLevel">pressureLevel</label>
          <input
          className='form-control'
            type="number"
            id="pressureLevel"
            name="pressureLevel"
            value={formData.pressureLevel}
            onChange={handleChange}
            
          />
        </div>
        <div>
          <label className='form-label' htmlFor="cholesterolLevel">Cholesterol Level</label>
          <input
          className='form-control'
            type="number"
            id="cholesterolLevel"
            name="cholesterolLevel"
            value={formData.cholesterolLevel}
            onChange={handleChange}
            
          />
        </div>
        <button className='btn btn-primary mt-5' type="submit">Submit Changes</button>
      </form>
    </div>
    <div>
      <p className='m-5'>{endmassage}</p>
    </div>
    </div>
  )
}

export default Edit