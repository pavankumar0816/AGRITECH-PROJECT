// src/Payment.js
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import QrScanner from 'react-qr-scanner';  

const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

const Payment = () => {
  const [amount, setAmount] = useState('');
  const [scannedData, setScannedData] = useState(null);
  const [error, setError] = useState('');

  const handleScan = (data) => {
    if (data) {
      setScannedData(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
    setError('Error scanning QR code');
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!amount || isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount.');
      return;
    }

    const stripe = await stripePromise;

    const response = await fetch('http://localhost:5000/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: parseFloat(amount) * 100 }),
    });

    const { clientSecret } = await response.json();

    // Confirm the payment with the client secret
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        // Replace this with your own card details input or component
      },
    });

    if (result.error) {
      alert(result.error.message);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        alert('Payment successful!');
      }
    }
  };

  return (
    <div className="payment-container">
      <h2>Payment Gateway</h2>
      <form onSubmit={handlePayment}>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Pay</button>
      </form>

      <h3>Scan QR Code:</h3>
      <QrScanner
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />

      {scannedData && <p>Scanned Data: {scannedData}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Payment;
