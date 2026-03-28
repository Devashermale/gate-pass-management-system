import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <header className='fixed top-0 w-full z-50 backdrop-blur-md bg-zinc-900/80 border-b border-white/10'>
      <nav className='max-w-7xl mx-auto px-6 h-20 flex items-center justify-between'>
        
        <div className='flex items-center'>
          <img src={logo} alt="Logo" className='h-12 w-auto object-contain' />
        </div>

        <div className='hidden md:flex items-center gap-8'>
          <Link to='/' className='text-white hover:text-emerald-400 font-medium transition-colors'>
            Home
          </Link>
          <Link to='/about' className='text-white hover:text-emerald-400 font-medium transition-colors'>
            About
          </Link>
          <Link to='/contact' className='text-white hover:text-emerald-400 font-medium transition-colors'>
            Contact
          </Link>
        </div>

        <div className='flex items-center gap-4'>
          <Link to='/register' className='text-white hover:text-emerald-400 font-medium px-4 py-2 transition'>
            Register
          </Link>
          <Link 
            to='/signup' 
            className='bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2 rounded-full font-bold shadow-lg transition-all transform hover:scale-105 active:scale-95'
          >
            Sign Up
          </Link>
        </div>

      </nav>
    </header>
  )
}

export default Navbar