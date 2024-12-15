import React from 'react'
import { useState,useEffect } from 'react'
import '../Asserts/css/Ah.css'
import Newloader from './Newloader'
import NN from './NN'
const AdminHome = () => {
  const [loading,setLoad]=useState(true);
  useEffect(()=>{

    const timer=setTimeout(()=>{
      setLoad(false);
    },3000);
    return ()=>clearTimeout(timer);
  },[])
  return (
    loading?
    (<><Newloader/></>):
    (<div className='homep'>
        <NN/>
    </div>)
  )
}

export default AdminHome