import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Asserts/css/carosel.css';

const Product = (props) => {
    const nav = useNavigate();
    console.log(props);
    
    const obj = {
        id: props.id,  // Use props.id instead of props.key
        name: props.name,
        url: props.image,
        price: props.price,
        description: props.desc
    };

    const handle = () => {
       nav('/lan', { state: obj });  // Correct way to pass state
    };
    
    return (
        <div className='card'>
            <img className="product--image" src={`${props.image}`} alt="product" />
            <h2 style={{color:"red"}}>{props.name}</h2>
            <p className="price">Rs:{props.price}</p>
            <p>
                <button style={{width:"100%", backgroundColor:"red", color:"white", border:'none'}} onClick={handle}>buy now</button>
            </p>
        </div>
    );
};

export default Product;
