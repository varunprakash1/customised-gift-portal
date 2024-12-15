import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import '../Asserts/css/Login.css';
import { useNavigate } from 'react-router-dom';
const Adminlogin = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
      });
      const valid = async () => {
        if(user.email==='Varun@gmail.com'&&user.password==="123456aa")
        {

          navigate('/ah')
        }
        else
        {
          alert('invalid credentials')

        }
      }
  return (
    <div className='bg'>
    <div className='Log'>
      <h1>Admin Login</h1>
      <label>Email</label>
      <input type='email' onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
      <label>Password</label>
      <input type="password" onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />
      <button onClick={valid}>Login</button>
    </div>
  </div>
  )
}

export default Adminlogin