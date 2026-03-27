import React from 'react'
import { Link } from 'react-router-dom'

function Securitynav() {
  return (
    <div>
        <header className='h-20 w-full flex items-center justify-center  gap-4 '>
               <Link to ='/security-dashboard' className='m-3 text-indigo-600 bg-indigo-50 rounded-md hover:bg-slate-50 hover:text-slate-900 '>Home</Link>
          <Link to='/visitor-reg'className='m-3 text-indigo-600 bg-indigo-50 rounded-md hover:bg-slate-50 hover:text-slate-900 '>visitor Registration</Link>
          <Link to ='/check-pass' className='m-3 text-indigo-600 bg-indigo-50 rounded-md hover:bg-slate-50 hover:text-slate-900 '>check in </Link>
        </header>
    </div>

  )
}

export default Securitynav