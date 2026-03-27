import React from 'react'
import Adminform from '../components/Adminform'
import Adminnav from '../components/Adminnav'
function Admindash() {
  return (
    <div>

      <div>
        <Adminnav />
        <div>
          <div className=' size-90  bg-white border-2 text-2xl text-center rounded m-2 '>whole employee</div>
          <div className=' size-90  bg-white border-2 text-2xl text-center rounded m-2 '>whole visitor</div>
          <div className=' size-90  bg-white border-2 text-2xl text-center rounded m-2 '>available employee</div>
          <div className=' size-90  bg-white border-2 text-2xl text-center rounded m-2 '>visitor approved</div>
        </div>
      </div>
    </div>
  )
}

export default Admindash