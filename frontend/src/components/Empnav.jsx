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
          
          <Link to ='/employee-dashboard' className='p-2 rounded bg-blue-600    hover:bg-blue-700  '>
          Home </Link>
          <Link to= '/visitor-reg' className='p-2 rounded   bg-blue-600 hover:bg-blue-700   '>
          visitor Registration
          </Link>
          <Link to ='/employee-visitor-details' className='p-2 rounded bg-blue-600 hover:bg-blue-700  '>visitor details</Link>
           <button className='m-3 bg-rose-50 text-rose-600 '  onClick={handleclick}>log out</button>
        </div>
       
    </div>
  )
}

export default Empnav