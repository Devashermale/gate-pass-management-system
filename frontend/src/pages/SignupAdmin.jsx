
import React from 'react'
import { useState } from 'react'
import useAdminsignup from '../hooks/useAdminsignup'
import { useNavigate } from 'react-router-dom'


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
      <div className=' h-screen'>
        <div className=' flex items-center justify-center h-screen '>
          <div className=' size-60'>
            <h1 className=' text-center text-2xl font-extrabold'>admin login</h1>
            <label>Email</label>
            <input type='email' className=' w-full' placeholder='enter your email' onChange={(e) => setemail(e.target.value)} />
            <label>password</label>
            <input type='password' className=' w-full' placeholder='enter your password' onChange={(e) => setpassword(e.target.value)} />
            <button type='submit' disabled={loading} onClick={handlesubmit}>submit</button>
            {error && <div>{error.msg}</div>}
          </div>
        </div>
      </div>
    </>
  )
}

export default SignupAdmin