import React from 'react'
import { Link } from 'react-router-dom'
import Empnav from '../components/Empnav'
function Empdash() {
  return (
    <div>
      <div className=' h-screen'>
        <Empnav />
        <div>
          <div className=' size-60'>
            whole visitors count
          </div>
          <div className=' size-60 '> active visitor count
          </div>
          <div className=' size-60 '>
            approved visitor
          </div>
          <div className=' size-60 '>
            Rejected visitor
          </div>
          <div className=' size-60 bg-amber-900 '>
            <h1 className=' text-indigo-400'>pending visitor</h1>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Empdash