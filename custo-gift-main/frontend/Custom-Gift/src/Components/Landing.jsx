import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Asserts/css/Landing.css';

const Landing = () => {
    const location = useLocation();
    const item = location.state || {};  // Fallback to an empty object if location.state is undefined
    const nav = useNavigate();
    const [dd, setDd] = useState({
        date: "",
        name: item.name,
        price: item.price
    });
    const imageUrl = item.url || item.image;

   
    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        const currentDate = new Date();
        
        // Remove time part of currentDate to only compare dates
        currentDate.setHours(0, 0, 0, 0);

        if (selectedDate < currentDate) {
            alert("Please select a future date for delivery.");
        } else {
            setDd({
                ...dd,
                date: e.target.value
            });
        }
    };

    const handleBuyNow = () => {
        if (dd.date === "") {
            alert("Please select a delivery date.");
        } else {
            nav('/a', { state: dd });
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-6 one" id='one'>
                    <img className="ind" src={imageUrl} alt="" />
                </div>
                <div className="col-6 two" id='two'>
                    <div className="input-container">
                        <h1 style={{ marginTop: "10px", marginLeft: "250px", color: "red" }}>{item.name}</h1>
                        <div className="price-container">
                            <h2 className="price-label">Price</h2>
                            <div className='hii'>
                                <h2 className="price-amount">{item.price}</h2>
                                <p>inclusive of all taxes</p>
                            </div>
                        </div>
                        <div>
                            <p>Enter your pincode</p>
                            <input type="text" className='pin' placeholder='pincode' />
                        </div>
                        <div>
                            <p>Delivery date</p>
                            <input type="date" className='pin' style={{ width: "200px" }} onChange={handleDateChange} />
                        </div>
                        <div>
                            <p>Upload the image to be printed on the gift</p>
                            <input type="file" className='sin' />
                        </div>
                    </div>
                    <div className="desc-container">
                        <p>{item.description}</p>
                    </div>
                    <button className="order" type='submit' onClick={handleBuyNow}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Landing;
