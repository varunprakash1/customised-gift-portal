import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../Asserts/css/carosel.css';
import Product from './Product';
import axios from 'axios';

const Carosel = (props) => {
  const [newdata, setdata] = useState([]);
  const va=props.name;
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/products/category/${va}`);
        setdata(res.data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetch();
  }, []);
  useEffect(() => {
    console.log(newdata);
  }, [newdata]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  // Map over newdata to create Product components
  const pro = newdata.map((item) => (
    <Product
      key={item.id} // Add a unique key prop for each item
      name={item.name}
      image={item.image}
      price={item.price}
      desc={item.description}
    />
  ));

  return (
    <div className='caro'>
      <h1 style={{color:"red"}}>{va}</h1>
      <Carousel responsive={responsive}>
        {pro}
      </Carousel>
    </div>
  );
};

export default Carosel;
