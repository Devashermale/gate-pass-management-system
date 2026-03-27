import React, { useState } from 'react';
import axios from 'axios';

const OtpVerification = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1); 
  const [error ,seterror] = useState(null)

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/otp/send', { email });
      setMessage(response.data.message);
      setStep(2); 
    } catch (err) {
      seterror(err.message);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/otp/verify', { email, otp });
      setMessage(response.data.message);
    } catch (err) {
      seterror(err.message);
    }
  };

  return (
    <div>
      <h2>{step === 1 ? "Login with OTP" : "Enter Verification Code"}</h2>
      
      {step === 1 ? (
        <form onSubmit={handleSendOtp}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
        
          />
          <button type="submit" >
            Send OTP
          </button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp}>
          <p>We sent a code to <strong>{email}</strong></p>
          <input 
            type="text" 
            placeholder="6-digit code" 
            value={otp} 
            onChange={(e) => setOtp(e.target.value)} 
            required 
            maxLength="6"
          />
          <button type="submit">
            Verify OTP
          </button>
          <button onClick={() => setStep(1)}>
            Change Email
          </button>
        </form>
      )}
     {error && <div>{error.message}</div>}
    
    </div>
  );
};

export default OtpVerification;