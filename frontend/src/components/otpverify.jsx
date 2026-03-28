import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const OtpVerification = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1); 
  const [error, seterror] = useState(null);
  const [message, setMessage] = useState(''); 
  const navigate = useNavigate()

  const handleSendOtp = async (e) => {
    e.preventDefault();
    seterror(null); 
    try {
      const response = await axios.post('http://localhost:8080/otp/send', { email });
      setMessage(response.data.message);
      setStep(2); 
    } catch (err) {
      seterror( err.message);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    seterror(null);
    try {
      const response = await axios.post('http://localhost:8080/otp/verify', { email, otp });
      setMessage(response.data.message);
      alert("OTP Verified Successfully!");
       navigate('/visitor-dashboard')
    } catch (err) {
      seterror(err.message);
    }
  };

  return (
  <div>
    <div className=' h-screen flex items-center justify-center'>
    <div className="p-4 size-60 ">
      <h2 className=' text-center'>{step === 1 ? "Login with OTP" : "Enter Verification Code"}</h2>
      
      {message && <div className="text-green-500">{message}</div>}
      
      {step === 1 ? (
        <form onSubmit={handleSendOtp}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="border p-2 mr-2"
          />
          <button type="submit" className="bg-blue-500 flex items-center justify-center text-white p-2 m-2">
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
            className="border p-2 mr-2"
          />
          <button type="submit" className="bg-green-500 text-white p-2 m-2 flex justify-center items-center">
            Verify OTP
          </button>
          <button type="button" onClick={() => setStep(1)} className="ml-2 text-gray-500">
            Change Email
          </button>
        </form>
      )}

      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
    </div>
    </div>
  );
};

export default OtpVerification;