import React, { useState, useEffect } from 'react';
import '../Asserts/css/ad.css';
import axios from 'axios';
import NN from './NN';
import { useLocation } from 'react-router-dom';
import Newloader from './Newloader';

const Add = () => {
    const [loading,setLoad]=useState(true);
  useEffect(()=>{

    const timer=setTimeout(()=>{
      setLoad(false);
    },3000);
    return ()=>clearTimeout(timer);
  },[])
    const [obj, setObj] = useState({
        name: "",
        image: "",
        price: "",
        description: "",
        category: ""
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const location = useLocation();

    useEffect(() => {
        if (location.state) {
            setObj(location.state);
        }
    }, [location.state]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setObj({
            ...obj,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/api/products", obj, {
                headers: { 'Content-Type': 'application/json' },
            });
            setSuccess("Product added successfully!");
            setError(null);
            console.log("Product added", response.data);
        } catch (error) {
            setError("There was an error adding the product.");
            setSuccess(null);
            console.error("There was an error adding the product!", error);
        }
    };

    return (loading?(<><Newloader/>
    </>):
    (

        <>
            <NN />
            <div className="nn">
                <div className='add'>
                    <form className="sub" onSubmit={handleSubmit}>
                        <div className="page">
                            <label>Product name:</label>
                            <input 
                                type="text" 
                                name="name" 
                                value={obj.name} 
                                onChange={handleChange} 
                                className='inp'
                            />
                            <label>Product Image URL:</label>
                            <input 
                                type="text" 
                                name="image" 
                                value={obj.image} 
                                onChange={handleChange} 
                                className='inp'
                                />
                            <label>Product Price:</label>
                            <input 
                                type="text" 
                                name="price" 
                                value={obj.price} 
                                onChange={handleChange} 
                                className='inp'
                                />
                            <label>Product Category:</label>
                            <input 
                                type="text" 
                                name="category" 
                                value={obj.category} 
                                onChange={handleChange} 
                                className='inp'
                                />
                            <label>Product Description:</label>
                            <textarea 
                                className='desci'
                                name="description" 
                                value={obj.description} 
                                onChange={handleChange} 
                                />
                            <button type="submit" className="submit-button">Add Product</button>
                            {success && <p className="success-message">{success}</p>}
                            {error && <p className="error-message">{error}</p>}
                        </div>
                    </form>
                </div>
            </div>
        </>
)
    );
};

export default Add;
