import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

function Empnav() {
  
 const navigate = useNavigate()
  const { logout } = useLogout()
    const handleclick = () => {
      logout()
   return navigate('/security-signup') 
   }
  return (
    <div>
        <div className='h-20 w-full flex items-center justify-center  gap-4   '>
          
          <Link to ='/employee-dashboard' className='m-3 text-indigo-600 bg-indigo-50 rounded-md hover:bg-slate-50 hover:text-slate-900 '>
          Home </Link>
          <Link to= '/visitor-reg' className='m-3 text-indigo-600 bg-indigo-50 rounded-md hover:bg-slate-50 hover:text-slate-900 '>
          visitor Registration
          </Link>
          <Link to ='/employee-visitor-details' className='m-3 text-indigo-600 bg-indigo-50 rounded-md hover:bg-slate-50 hover:text-slate-900 '>visitor details</Link>
           <button className='m-3 text-indigo-600 bg-indigo-50 rounded-md hover:bg-slate-50 hover:text-slate-900 '  onClick={handleclick}>log out</button>
        </div>
       
    </div>
  )
}

export default Empnav