import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Card from '../../components/card/card'
import './home.css'
import { useEffect, useState, Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import NavbarPersonal from '../../components/navbar-personal/navbar-personal'

function Home() {
  
  const jwt = localStorage.getItem('jwt-token')
  const user1 = jwtDecode(jwt)
  console.log(user1.userId)
  
  //console.log(id)
  //console.log(id)
  
  const [user, setuser] = useState([])
  const [massagesug, setmassagesug] = useState('Loading data..')
  const [massagepre, setmassagepre] = useState('Loading data..')
  const [massagecho, setmassagecho] = useState('Loading data..')
  const [massageoveroll, setMasageoveroll] = useState('Loading data..')
  
  useEffect(()=>{
    
    const fechdata = async () => {
      try{
        
        const res = await axios.get(`http://localhost:4000/api/users/${user1.userId}`)
        setuser(res.data)
        //console.log(user.name)
        
      }catch (error){
        console.log(error)
      }
      }
     

      const fechmassage = async () =>{
        try{  
          const ressug = await axios.get(`http://localhost:4000/api/users/${user1.userId}/openai/sugar`)
          const respre = await axios.get(`http://localhost:4000/api/users/${user1.userId}/openai/pre`)
          const rescho = await axios.get(`http://localhost:4000/api/users/${user1.userId}/openai/cho`)
          const resoveroll = await axios.get(`http://localhost:4000/api/openai/overoll/${user1.userId}`)

          setmassagesug(ressug.data)
          setmassagepre(respre.data)
          setmassagecho(rescho.data)
          setMasageoveroll(resoveroll.data)
          console.log(ressug.data)
        }catch (error){
          console.log(error)
        }
      }
      fechmassage()
      const user = fechdata()
       
  }, [])

  const handleDelete = async ()=>{
    try{
      const res = await axios.delete(`http://localhost:4000/api/users/${user1.userId}`)
      //localStorage.removeItem('jwt-token')
      console.log(res)

    }catch(error){
      console.log(error)
    }
}
  
 




  return (
    <div>
        <NavbarPersonal/>
        <h1 className='hello-text ms-3'>Hi {user.name}</h1>
        <div className="grid-container">
          <div className="grid-item">
            <div className='new-cards'>
              <p className='text'>cholesterol Level</p>
              <p className='value'>{user.cholesterolLevel} mg/dl</p>
            </div>
            <div className='new-cards'>
              <p className='text'>Pressure Level</p>
              <p className='value'>{user.pressureLevel} mmHg</p>
            </div>
            <div className='new-cards'>
              <p className='text'>Blood Sugar</p>
              <p className='value'>{user.bloodSugar} mg/dl</p>
            </div>
          </div>
          
        </div>
        <Link className='btn btn-dark ms-5 mt-3 mb-5' to={`/user/edit/${user._id}`} >Edit Details</Link>
        
         
        <h1 className='helthgoal ms-3'>Health Tips</h1>
        <div className='m-3 full-card-set'>
          <div className="card card-st"  >
            <div className="card-body">
              <h5 className="card-title">About Your blood Sugar Level</h5>
              <p className="card-text">{massagesug}</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
          <div className="card card-st"  >
            <div className="card-body">
              <h5 className="card-title">About Your Blood Pressure Level</h5>
              <p className="card-text">{massagepre}</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
          <div className="card card-st"  >
            <div className="card-body">
              <h5 className="card-title">About Your Cholesterol Level</h5>
              <p className="card-text">{massagecho}</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
          
        </div>
        <div className='overoll-health'>
          <h1 className='m-3'>My Overall Health</h1>
          <div className="card overoll-health-card "  >
            <div className="card-body">
              <h5 className="card-title">About Your Overall Health</h5>
              <p className="card-text">{massageoveroll}</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
        
    <Link className='btn btn-danger m-3 mt-5' onClick={handleDelete} to='/noaccount'>Delete My Account</Link>

    </div>
    
  )
}

export default Home