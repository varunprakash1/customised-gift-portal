import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Newcard from './newcard';
import Drawe from './Drawer';
import '../Asserts/css/Fullshop.css'
import { useLocation } from 'react-router-dom';
const Price = () => {
    const [pro,newpro]=useState([]);
    const location=useLocation();
    const vari=location.state||"";
    useEffect(()=>{
       const fetch = async()=>{
         
          
          const res=await axios.get(`http://localhost:8080/api/products/desc`);
          newpro(res.data);
          console.log(res.data);
          
       }
       fetch()
    },[])
    const card=pro.map((product)=>(
        <Newcard item={product} />
    ))
  return (
    <div className="newdiv">
        <Drawe/>
        <h2>send your gifts to your loved one</h2>
    <div className="gridcontainer">
        {card}
    </div>
    </div>
    
  )
}

export default Price