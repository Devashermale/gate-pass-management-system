import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

function Securitynav() {
    const navigate = useNavigate()
  const { logout } = useLogout()
    const handleclick = () => {
      logout()
   return navigate('/security-signup') 
   }
  return (
    <div>
        <header className='h-20 w-full flex items-center justify-center  gap-4 '>
               <Link to ='/security-dashboard' className='p-2 rounded bg-blue-600    hover:bg-blue-700  '>Home</Link>
          <Link to='/visitor-reg'className='p-2 rounded bg-blue-600    hover:bg-blue-700  '>visitor Registration</Link>
          <Link to ='/check-pass' className='p-2 rounded bg-blue-600    hover:bg-blue-700  '>check in </Link>
          <button className='m-3 bg-rose-50 text-rose-600' onClick={handleclick}> log out</button>
        </header>
    </div>

  )
}

export default Securitynav