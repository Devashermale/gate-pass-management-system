import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

function adminnav() {

   const navigate = useNavigate()
  const { logout } = useLogout()
    const handleclick = () => {
      logout()
   return navigate('/security-signup') 
   }
  return (
    <div>
    <header className='  h-20 w-full flex items-center justify-center p-6 gap-6'>
      <Link to ='/admin-dashboard' className='m-3 text-indigo-600 bg-indigo-50 rounded-md hover:bg-slate-50 hover:text-slate-900 '> Home</Link>
      <Link to ='/employee-reg' className='m-3 text-indigo-600 bg-indigo-50 rounded-md hover:bg-slate-50 hover:text-slate-900 ' >Employee Registration</Link>

       <Link to ='/staff-detail' className='m-3 text-indigo-600 bg-indigo-50 rounded-md hover:bg-slate-50 hover:text-slate-900 '>staff details</Link>
       <Link to ='/visitor-detail' className='m-3 text-indigo-600 bg-indigo-50 rounded-md hover:bg-slate-50 hover:text-slate-900 '>visitor details</Link>
      <button onClick={handleclick}>log out</button>
    </header>
    </div>
  )
}

export default adminnav