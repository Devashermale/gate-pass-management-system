import React from 'react'
import { Link } from 'react-router-dom'
import Empnav from '../components/Empnav'
function Empdash() {
  return (
    <div>
      <div className=' h-screen'>
        <Empnav />
        <div className=' grid grid-cols-3 m-8'>
          <div className=' size-90  bg-white border-2 text-2xl text-center rounded m-2'>
            whole visitors count
          </div>
          <div className=' size-90  bg-white border-2 text-2xl text-center rounded m-2 '> active visitor count
          </div>
          <div className='size-90  bg-white border-2 text-2xl text-center rounded m-2 '>
            approved visitor
          </div>
          <div className=' size-90  bg-white border-2 text-2xl text-center rounded m-2'>
            Rejected visitor
          </div>
          <div className=' size-90  bg-white border-2 text-2xl text-center rounded m-2 '>
            <h1 className=' text-indigo-400'>pending visitor</h1>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Empdash