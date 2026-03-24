import React from 'react'
import { Link } from 'react-router-dom'
  
function Securitydash() {
  return (
    <div>
        <div>
          <Link to ='/security-dashboard'>Home</Link>
          <Link to='/visitor-reg'>visitor</Link>
          <Link to ='/check-pass'>check in </Link>
        </div>
    </div>
  )
}

export default Securitydash