import React, { useEffect, useState } from 'react'
import '../Asserts/css/Newcard.css'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
const Newcard = (props) => {
    const nav=useNavigate();
    const [pro,newpro]=useState([]);
  
    useEffect((props)=>{
       const fetch = async()=>{
          const res=await axios.get('http://localhost:8080/api/products');
          newpro(res.data);
          console.log(res.data);
          
       }
       fetch()
    },[])
    const obj=props.item;
  return (
    <>
     
       <div className="nc">
        <div className="nimg">
            <img src={obj.image} alt="" />
        </div>
        <div className="ndesc">
             <h2>{obj.name}</h2>
             <p>{obj.price}</p>
             <button className='buy' onClick={()=>{nav('/lan',{state:obj})}}>buy now!</button>
        </div>
       </div>
       
    </>
  )
}

export default Newcard