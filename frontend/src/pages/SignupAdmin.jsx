
import React from 'react'
import { useState } from 'react'
import useAdminsignup from '../hooks/useAdminsignup'
import { Link, useNavigate } from 'react-router-dom'


function SignupAdmin() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const navigate = useNavigate();

  const { Signupadmin, loading, error } = useAdminsignup()
  const handlesubmit = async () => {
           const sign = await Signupadmin(email ,password)
    if (sign) {
      return navigate('/admin-dashboard')
    }

  }
  return (
    <>
      <div className=''>
        <div className=' flex items-center justify-center h-screen bg-slate-150 '>
          <div className=' size-80 shadow-2xl gap-6 p-4 border border-slate-200 rounded'>
            <h1 className=' text-3xl text-center font-bold m-2  text-slate-900'> welcome admin </h1>
            <h1 className=' text-center text-2xl font-bold m-2 text-slate-900'> login here</h1>
            <label className=' text-slate-500 text-lg m-2 '>Email</label>
            <input type='email' className=' w-full bg-slate-50 h-10 border-slate-300 focus:ring-indigo-500' placeholder='enter your email' onChange={(e) => setemail(e.target.value)} />
            <label  className=' text-slate-500 text-lg  m-2'>password</label>
            <input type='password' className=' w-full  bg-slate-50 h-10 border-slate-300 focus:ring-indigo-500' placeholder='enter your password' onChange={(e) => setpassword(e.target.value)} />
            <button type='submit' className=' h-10 mt-1  bg-indigo-600 hover:bg-indigo-700 w-full' disabled={loading} onClick={handlesubmit}>submit</button>
            {error && <div>{error.msg}</div>}
          </div>
        </div>
      </div>
    </>
  )
}

export default SignupAdmin