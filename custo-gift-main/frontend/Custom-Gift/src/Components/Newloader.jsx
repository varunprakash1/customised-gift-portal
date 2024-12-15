import React from 'react'
import ClipLoader from "react-spinners/HashLoader";
const Newloader = () => {
  return (
    <div className='nl' style={{height:'100vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <ClipLoader size={80} color='red'/>
    </div>
  )
}

export default Newloader