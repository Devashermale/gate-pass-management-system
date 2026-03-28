import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Securitynav from '../components/Securitynav'
function Securitydash() {

  
  const [count, setCount] = useState({
    total:0,
    pending: 0,
    approved: 0,
    rejected:0,
    checkedout: 0,
    checkedin: 0
  });
  useEffect(()=>{
    try {
      const res = axios.get('http://localhost:8080/visitor/pass')

      const visitor = res.data 

    setCount ({
      total: visitor.length,
        pending: visitor.filter(v =>v.status === 'pending').length,
        approved: visitor.filter(v =>v.status === 'Approved').length,
        checkedout: visitor.filter(v =>v.status === 'check_out').length,
         checkedin: visitor.filter(v =>v.status === 'check_in').length,
         rejected:visitor.filter(v=>v.status=== 'rejected').length


    })
    } catch (error) {
      
    }
  },[])
  return (
    <div>
      <div> 
        <Securitynav />
        <div className=' h-screen grid grid-cols-3 bg-amber-900  '>
         
          <div className='w-120 h-60  bg-blue-800  border-2 text-2xl text-center rounded m-2 '>whole  visitor 
               <span className=' m-10  text-6xl flex items-center justify-center '>{count.total}</span>
          </div>
          <div className='  w-120 h-60  bg-blue-800 border-2 text-2xl text-center rounded m-2 '>pending 
               <span  className=' m-10  text-6xl flex items-center justify-center '>{count.pending}</span>
          </div>
          <div className=' w-120 h-60   bg-blue-800 border-2 text-2xl text-center rounded m-2 '>approved
               <span  className=' m-10  text-6xl flex items-center justify-center '>{count.approved}</span>
          </div>
          <div className=' w-120 h-60  bg-blue-800 border-2 text-2xl text-center rounded m-2 '>visitor check in
               <span  className=' m-10  text-6xl flex items-center justify-center '>{count.checkedin}</span>
            </div>
            <div className=' w-120 h-60   bg-blue-800 border-2 text-2xl text-center rounded m-2 '>visitor check in
               <span   className=' m-10  text-6xl flex items-center justify-center  '>{count.checkedout}</span>
            </div>
              <div className='w-120 h-60  bg-blue-800 border-2 text-2xl text-center rounded m-2 '>visitor Rejected
               <span  className=' m-10  text-6xl flex items-center justify-center '>{count.rejected}</span>
             </div>
        </div>
      </div>
    </div>
  )
}

export default Securitydash