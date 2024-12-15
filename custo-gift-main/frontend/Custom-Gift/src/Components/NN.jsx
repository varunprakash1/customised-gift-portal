import React from 'react'
import '../Asserts/css/Navbar.css'
import logo from '../Asserts/images/1000_F_190648606_xOWhBCspt5R3W0oVj258W88ZLUBvUWOI-removebg-preview.png'
import { useNavigate } from 'react-router-dom'

const NN= () => {
    
    const nav=useNavigate();
  return (
    <div className='bar'>
      <div className='left'>
        <img src={logo} alt=""width='100vw' height='70px' style={{borderRadius:"40px"}}/>
        <p>CUSTO-GIFT</p>
      </div>
      <div className='right'>
        <button className='li' onClick={()=>{nav('/add')}}>add items</button>
        <button className='li'onClick={()=>{nav('/del')}}>delete items</button>
        <button className='li' onClick={()=>{nav('/order')}}>order details</button>
      </div>
      <div className="cart">
        
      </div>
     
    </div>
  )
}

export default NN