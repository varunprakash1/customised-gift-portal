import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
} from '@mui/material';

import '../Asserts/css/Payment.css'; // Link to the updated CSS file
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const location=useLocation();
  const nav=useNavigate();
  const obj=location.state;
  const [cardNumber, setCardNumber] = useState('#### #### #### ####');
  const [expiryDate, setExpiryDate] = useState('MM/YY');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('Your Name Here');
  
  const handlePayment = () => {
    console.log('Payment Submitted');
    nav('/con',{state:obj})
  };

  return (
    <Container maxWidth="sm" className="payment-container">
      <Box className="card-preview">
        <Card className="credit-card">
          <CardContent className="card-content">
            <Box className="chip" />
            <Typography variant="h6" className="card-name">
              {nameOnCard}
            </Typography>
            <Typography variant="body1" className="card-number">
              {cardNumber}
            </Typography>
            <Box className="card-details">
              <Typography variant="body2" className="expiry-date">
                {expiryDate}
              </Typography>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" 
                alt="Card Brand"
                className="card-brand"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Card className="payment-form">
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Enter Payment Details
          </Typography>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Card Number"
                  fullWidth
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="#### #### #### ####"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Expiry Date (MM/YY)"
                  fullWidth
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="CVV"
                  fullWidth
                  type="password"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Name on Card"
                  fullWidth
                  value={nameOnCard}
                  onChange={(e) => setNameOnCard(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handlePayment}
                >
                  Pay Now
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PaymentPage;
