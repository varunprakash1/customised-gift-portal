import React from 'react'
import '../Asserts/css/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import logo from '../Asserts/images/1000_F_190648606_xOWhBCspt5R3W0oVj258W88ZLUBvUWOI-removebg-preview.png'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const nav=useNavigate();
  return (
    <div className='bar'>
      <div className='left' onClick={()=>{nav('/profile')}}>
        <img src={logo} alt=""width='100vw' height='70px' style={{borderRadius:"40px"}}/>
        <p>CUSTO-GIFT</p>
      </div>
      <div className='right'>
        <button className='li' onClick={()=>{nav('/home')}}>Home</button>
        <button className='li'onClick={()=>{nav('/about')}}>About</button>
        <button className='li' onClick={()=>{nav('/contact')}}>Contact</button>
      </div>
      <div className="cart">
        <FontAwesomeIcon icon={faShoppingCart} onClick={()=>nav('/cart')}/>
      </div>
     
    </div>
  )
}

export default Navbar
