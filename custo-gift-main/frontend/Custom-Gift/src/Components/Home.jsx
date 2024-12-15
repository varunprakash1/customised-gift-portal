import React, { useEffect, useState } from 'react';
import '../Asserts/css/Home.css';
import Navbar from './Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/action';
import Newloader from './Newloader';

const Home = () => {
  const [loading,setLoad]=useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state;
  const dispatch = useDispatch();
  useEffect(() => {
    if (item) {
      dispatch(setUser(item));
      console.log(item);
    }
  }, [item, dispatch]);
  useEffect(()=>{

    const timer=setTimeout(()=>{
      setLoad(false);
    },3000);
    return ()=>clearTimeout(timer);
  },[])
  return (
    loading?(<>
    <Newloader/>
    </>

    ):(

      <div className='home'>
      <Navbar />
      <button type='submit' className='hi' onClick={() => navigate('/nc',{state:""})}>Shop Now</button>
    </div>
    )
  );
};

export default Home;
