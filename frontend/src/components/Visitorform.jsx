import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import emailjs from '@emailjs/browser';

function Visitorform() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [purpose, setpurpose] = useState('');
  const [date, setdate] = useState('');
  const [photo, setphoto] = useState(null);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(false);
  const [emp, setemp] = useState('');
 const navigate  = useNavigate()
  const sendEmail = async () => {
    const templateParams = {
      from_name: name,
      from_email: email,
      from_visitpurpose: purpose,
      from_visitdate: date,
      from_empname: emp,
    };
    try {
      await emailjs.send(
        'service_q79ovvp',  
        'template_qj1ccmw', 
        templateParams,
        'sXXpvaStVizJJ1UCE'   
      );
    } catch (err) {
      console.error('Email failed to send:', err);
    }
  };
  
  const handlesubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    seterror(null);
    

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('visitpurpose', purpose);
    formData.append('joiningdate', date);
    formData.append('empname', emp);
    if (photo) formData.append('path', photo);

    try {
      const res = await axios.post('http://localhost:8080/visitor/pass', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      await sendEmail()
      alert("Registration Successful");
      const save = localStorage.getItem(res.data)
     return save;
    } catch (err) {
      console.error(err);
      seterror(err.message);
    } finally {
      setloading(false);
    }
  };
 
 


  return (
    <div className='flex items-center justify-center min-h-screen bg-slate-950 p-4'>
      
      <div className='w-full max-w-md p-6 bg-slate-900 border border-slate-800 rounded-lg'>
        <h1 className='font-bold text-2xl text-center text-white mb-4'>Visitor Registration</h1>
        
        <form className='space-y-3' onSubmit={handlesubmit}>
          <div>
            <label className='text-slate-400 block text-sm'>Visitor Name</label>
            <input type='text' className='w-full p-2 bg-slate-800 border border-slate-700 text-white rounded'
              placeholder='Full Name' onChange={(e) => setname(e.target.value)} required />
          </div>

          <div>
            <label className='text-slate-400 block text-sm'>Email</label>
            <input type='email' className='w-full p-2 bg-slate-800 border border-slate-700 text-white rounded'
              placeholder='Enter your email' onChange={(e) => setemail(e.target.value)} required />
          </div>

          <div>
            <label className='text-slate-400 block text-sm'>Visit Purpose</label>
            <input type='text' className='w-full p-2 bg-slate-800 border border-slate-700 text-white rounded'
              placeholder='Enter your purpose' onChange={(e) => setpurpose(e.target.value)} required />
          </div>

          <div>
            <label className='text-slate-400 block text-sm'>Employee Name</label>
            <input type='text' className='w-full p-2 bg-slate-800 border border-slate-700 text-white rounded'
              placeholder='Employee Name' onChange={(e) => setemp(e.target.value)} required />
          </div>

          <div>
            <label className='text-slate-400 block text-sm'>Visit Date</label>
            <input type='date' className='w-full p-2 bg-slate-800 border border-slate-700 text-white rounded' 
            onChange={(e) => setdate(e.target.value)} required />
          </div>

          <div>
            <label className='text-slate-400 block text-sm'>Visitor Photo</label>
            <input type='file' className='w-full text-slate-400' 
              onChange={(e) => setphoto(e.target.files[0])} required />
          </div>

          <button 
            type='submit' 
            className={`w-full py-2 mt-4 text-white font-bold rounded 
              ${loading ? 'bg-gray-600' : 'bg-indigo-500 hover:bg-indigo-600'}`}
            disabled={loading} 
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>

          {error && <div className="text-red-500 text-sm mt-2 text-center">{error}</div>}
        </form>
      </div>
    </div>
  );
}

export default Visitorform;