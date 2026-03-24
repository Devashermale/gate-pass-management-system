import React from 'react'
import { Link, Links } from 'react-router-dom'

function Empnav() {
  return (
    <div>
        <div className='h-20 w-full flex items-center justify-center  gap-4   '>
          
          <Link to ='/employee-dashboard' className='m-3 text-indigo-600 bg-indigo-50 rounded-md hover:bg-slate-50 hover:text-slate-900 '>
          Home </Link>
          <Link to= '/visitor-reg' className='m-3 text-indigo-600 bg-indigo-50 rounded-md hover:bg-slate-50 hover:text-slate-900 '>
          visitor Registration
          </Link>
          <Link to ='/employee-visitor-details' className='m-3 text-indigo-600 bg-indigo-50 rounded-md hover:bg-slate-50 hover:text-slate-900 '>visitor details</Link>
          
        </div>
    </div>
  )
}

export default Empnav