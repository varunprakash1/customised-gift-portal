import React from 'react'
import Search from './Search'
import '../Asserts/css/Auto.css'
import Drawe from './Drawer'
import { useState,useEffect } from 'react'
import Newloader from './Newloader'
const Auto = () => {
  const [loading,setLoad]=useState(true);
  useEffect(()=>{

    const timer=setTimeout(()=>{
      setLoad(false);
    },3000);
    return ()=>clearTimeout(timer);
  },[])
  return (
    loading?
    (<><Newloader/></>)
    :(<>
    <Drawe/>
    <div className="auto">
    <Search/>
    </div>
    </>)
  )
}

export default Auto