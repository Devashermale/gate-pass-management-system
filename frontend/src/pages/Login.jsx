import React, { useState } from 'react'
import useRegister from '../hooks/useRegister'
import { useNavigate } from 'react-router-dom';


function Login() {
const [name ,setname] = useState('')
  const [ email ,setemail] = useState('')
  const [ password , setpassword] = useState('')
    const navigate = useNavigate();

  const {Login ,loading, error} = useRegister()
  const handlesubmit = async(e)=>{
    e.preventDefault()
       await Login (name, email, password)
       setname('')
       setemail('')
       setpassword('')
       
  }
  const GotoNavigate = ()=>{
    if(!email==''||!password ==''){
     return navigate('/visitor-dashboard')
    }
  } 
  const handleclick =()=>{
    handlesubmit()
    GotoNavigate()
  }
  return (
    <div className=''>
      <div className=' flex items-center justify-center h-screen bg-blue-900 ' >
        <form className=' size-70 bg-amber-700 rounded-sm gap-6 p-4'>
           <h1 className=' font-bold h-10 text-2xl text-center'>register here </h1>
           
           <label className=' font-bold'>email</label><br/>
           <input type='email'  className=' w-full h-10 border-2 bg-white rounded-sm' placeholder='enter your email' onChange={(e)=>setemail(e.target.value)} /><br/>
           <label className=' font-bold'>password</label><br/>
          <input type='password'  className=' w-full h-10 border-2 bg-white rounded-sm ' placeholder='enter your password' onChange={(e)=>setpassword(e.target.value)} /><br/>
           <button type='submit'disabled= {loading} className=' w-full mt-2 bg-gray-700 h-12' onClick={handleclick}>submit</button>
             {error && <div className=' text-red-900'>{error}</div>}
        </form>
      </div>
    </div>
  )
}

export default Login