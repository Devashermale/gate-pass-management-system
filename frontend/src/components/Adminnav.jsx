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
      <Link to ='/admin-dashboard' className='p-2 rounded bg-blue-600    hover:bg-blue-700   '> Home</Link>
      <Link to ='/employee-reg' className='p-2 rounded bg-blue-600    hover:bg-blue-700  ' >Employee Registration</Link>

       <Link to ='/staff-detail' className='p-2 rounded bg-blue-600    hover:bg-blue-700  '>staff details</Link>
       <Link to ='/visitor-detail' className='p-2 rounded bg-blue-600    hover:bg-blue-700   '>visitor details</Link>
      <button className='m-3 bg-rose-50 text-rose-600 ' onClick={handleclick}>log out</button>
    </header>
    </div>
  )
}

export default adminnav