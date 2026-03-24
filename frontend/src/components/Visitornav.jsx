import React from 'react'
import { Link } from 'react-router-dom'

function Visitornav() {
  return (
    <div>
        <div className=' h-20 w-full flex items-center justify-center bg-white/80 backdrop-blur-md border-b border-slate-200 text-slate-600'>
            <Link to ='/visitor-dashboard' className=' m-3 text-indigo-600 bg-indigo-50 rounded-md hover:bg-slate-50 hover:text-slate-900 '>visitor Registration</Link>
            <Link to='/see-appointment' className='m-3 text-indigo-600 bg-indigo-50 rounded-md hover:bg-slate-50 hover:text-slate-900 '>see appointment</Link>
            <Link to ='/visitor-pass ' className=' m-3 text-indigo-600 bg-indigo-50 rounded-md hover:bg-slate-50 hover:text-slate-900' >passes</Link>
        </div>
    </div>
  )
}

export default Visitornav