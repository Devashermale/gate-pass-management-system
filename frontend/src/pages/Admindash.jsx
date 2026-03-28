import React from 'react'
import Adminform from '../components/Adminform'
import Adminnav from '../components/Adminnav'
function Admindash() {

  return (
    <div>

      <div>
        <Adminnav />
        <div className=' grid grid-cols-3'>
          <div className=' w-120 h-60  bg-blue-800  border-2 text-2xl text-center rounded m-2 '>whole employee</div>
          <div className='w-120 h-60   bg-blue-800  border-2 text-2xl text-center rounded m-2 '>whole visitor</div>
\          <div className='w-120 h-60  bg-blue-800    border-2 text-2xl text-center rounded m-2 '>visitor approved</div>
          <div className='w-120 h-60   bg-blue-800  border-2 text-2xl text-center rounded m-2 '>rejected visitor</div>
          <div className='w-120 h-60  bg-blue-800  border-2 text-2xl text-center rounded m-2 '>pending</div>
        </div>
      </div>
    </div>
  )
}

export default Admindash