import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Asserts/css/Confirmation.css'
const Confirmation = () => {
  const loc = useLocation();
  const order = loc.state;
  const nav = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (!order || !order.cust) {
    return <div>Order details are missing.</div>;
  }

  const order1 = {
    name: order.cust.name,
    email: order.cust.email,
    product: order.name,
    price: order.price,
    date: order.date,
    address: order.address,
  };

  const handleOrder = async () => {
    setLoading(true);
    setError(null);
    try {
      await axios.post('http://localhost:8080/order', order1, {
        headers: { 'Content-Type': 'application/json' },
      });
      nav('/shop');
    } catch (err) {
      setError('There was an error processing your order. Please try again.');
      console.error("Error posting order:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="confirmation">
      <h1>Order Confirmation</h1>
      <div>
        <h2>Order Details:</h2>
        <p><strong>Customer:</strong> {order.cust.name}</p>
        <p><strong>Email:</strong> {order.cust.email}</p>
        <p><strong>Item Name:</strong> {order.name}</p>
        <p><strong>Item Price:</strong> {order.price}</p>
        <p><strong>Delivery Date:</strong> {order.date}</p>
        <p><strong>Address:</strong> {order.address}</p>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button onClick={handleOrder} disabled={loading}>
          {loading ? 'Processing...' : 'Continue'}
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
