import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Home from '../pages/Home/home'
import { Route, Routes } from "react-router-dom";
import Landing from '../pages/Landing/landing'
import Login from '../pages/Login/login'
import Signup from '../pages/Signup/signup'
import Edit from '../pages/edit/edit';
import Noaccount from '../pages/noaccount/noaccount';

function App() {
  const [count, setCount] = useState(0)
  const [users, setUser] = useState([])

  // Calling server

  
  return (
    <>
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/user/edit/:id' element= {<Edit/>}></Route>
      <Route path='/noaccount' element={<Noaccount/>}></Route>
    </Routes>
    </>
  )
}

export default App
