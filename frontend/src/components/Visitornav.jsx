import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
function Visitornav() {
  const navigate = useNavigate()
  const { logout } = useLogout()
  const handleclick = () => {
    logout()
    return navigate('/')
  }

  return (
    <div>
      <div className=' h-20 w-full flex items-center justify-center bg-white/80 backdrop-blur-md border-b border-slate-200 text-slate-600'>
        <Link to='/visitor-dashboard' className=' m-3 text-indigo-600 bg-indigo-50 rounded-md hover:bg-slate-50 hover:text-slate-900 '>visitor Registration</Link>
        <Link to='/see-appointment' className='m-3 text-indigo-600 bg-indigo-50 rounded-md hover:bg-slate-50 hover:text-slate-900 '>see appointment</Link>
        <Link to='/visitor-pass ' className=' m-3 text-indigo-600 bg-indigo-50 rounded-md hover:bg-slate-50 hover:text-slate-900' >passes</Link>
        <button onClick={handleclick}>logout</button>
      </div>
    </div>
  )
}

export default Visitornav