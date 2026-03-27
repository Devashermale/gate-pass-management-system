import React from 'react'
import { Link } from 'react-router-dom'
import Securitynav from '../components/Securitynav'
function Securitydash() {
  return (
    <div>
      <div>
        <div className=' grid grid-cols-3'>
          <Securitynav />
          <div className=' size-90  bg-white border-2 text-2xl text-center rounded m-2 '>check out visitor </div>
          <div className=' size-90  bg-white border-2 text-2xl text-center rounded m-2 '>pending </div>
          <div className=' size-90  bg-white border-2 text-2xl text-center rounded m-2 '>approved</div>
          <div className=' size-90  bg-white border-2 text-2xl text-center rounded m-2 '>visitor check in </div>
        </div>
      </div>
    </div>
  )
}

export default Securitydash