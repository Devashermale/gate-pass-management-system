import React from 'react'
import Empnav from '../components/Empnav'
function Empdash() {
  return (
    <div>
      <div className=' h-screen'>
        <Empnav />
        <div className=' grid grid-cols-3 m-8'>
          <div className='w-120 h-60   bg-blue-800 border-2 text-2xl text-center rounded m-2'>
            whole visitors count
          </div>
        
          <div className='w-120 h-60  bg-blue-800 border-2 text-2xl text-center rounded m-2 '>
            approved visitor
          </div>
          <div className=' w-120 h-60  bg-blue-800 border-2 text-2xl text-center rounded m-2'>
            Rejected visitor
          </div>
          <div className=' w-120 h-60   bg-blue-800 border-2 text-2xl text-center rounded m-2 '>
            pending visitor
          </div>

        </div>

      </div>
    </div>
  )
}

export default Empdash