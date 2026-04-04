import { useState } from 'react'
import useSignup from '../hooks/useSignup'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const { Signup, error, loading } = useSignup()
  const navigate = useNavigate()
  const handlesubmit = async (e) => {
    e.preventDefault();
    const sign = await Signup(email, password)

    if (sign) {
      return navigate('/visitor-dashboard')
    }
  }
  
  return (
    <div>
      <div className=' bg-gray-700 flex items-center justify-center h-screen'>
        <form className=' size-80 bg-white rounded-md p-5'>
          <h1 className=' font-bold text-center text-2xl p-2.5 text-slate-900'>Signup</h1>
          <label className=' font-bold text-lg m-1.5 text-slate-900'>email</label> <br />
          <input type='email' className=' w-full h-10 m-1.5 border-2 rounded-md' placeholder='enter your email' onChange={(e) => setemail(e.target.value)} /> <br />
          <label className=' font-bold text-lg m-1.5 text-slate-900'>password</label> <br />
          <input type='password' className=' w-full h-10 m-1.5 border-2 rounded-md' placeholder='enter your password' onChange={(e) => setpassword(e.target.value)} /> <br />
          <button type=' submit ' className='  w-full h-10 bg-indigo-600 hover:bg-indigo-700 rounded-md ' disabled={loading} onClick={handlesubmit}>submit</button>
          {error && <div><h1 className='text-red-500'>{error.message}</h1></div>}
        </form>
      </div>
    </div>
  )
}

export default Signup