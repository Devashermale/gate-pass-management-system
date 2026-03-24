import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
function Navbar() {
  return (
    <div className=' bg-zinc-900'>
        <header className=''>
          <img />
        <nav className=' grid grid-cols-3 w-full bg-zinc-900 '>
          <div>
            <img src={logo}alt=""className=' size-18' />
          </div>
          <div className=' flex items-center justify-center mr-52  '>
            <Link to='/' ><h1 className=' hover:underline text-3xl  bg-emerald-600 m-2 rounded '>Home </h1>

            </Link>
            <Link to ='/about' >
            <h1 className=' hover:underline text-3xl  bg-emerald-600 m-2 rounded '>about</h1>
            </Link>
            <Link to = '/contact'>
            <h1 className=' hover:underline text-3xl  bg-emerald-600 m-2 rounded'>contact</h1>
            </Link>
            </div>
            <div className='flex ml-52 float-end'>
            <Link to= '/register'><h1 className=' hover:underline text-3xl  bg-emerald-600 m-2 rounded'>register</h1></Link>
          <Link to= '/signup'><h1 className=' hover:underline text-3xl  bg-emerald-600 m-2 rounded'>signup</h1></Link>
          </div>
        </nav>
        </header>
    </div>
  )
}

export default Navbar