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
      <div className=' h-screen bg-slate-50'> 
                 <Securitynav />
        <div className='  grid grid-cols-3   '>
          <div className='w-120 h-60  bg-white border-t-4 border-blue-500  border text-2xl text-center rounded  '>
            <h1 className='text-blue-600'>whole  visitor </h1>
               <span className=' m-10  text-6xl flex items-center justify-center  '>{count.total}</span>
          </div>
          <div className='  w-120 h-60 bg-white border-t-4  border-amber-500 text-2xl text-center rounded  '>
            <h1 className='text-amber-600'>visitor</h1>
               <span  className=' m-10  text-6xl flex items-center justify-center '>{count.pending}</span>
          </div>
          <div className=' w-120 h-60 bg-white border-t-4 border-emerald-500 text-2xl text-center rounded m-2 '>
            <h1 className='text-emerald-600'>  approved visitor</h1>
          
               <span  className=' m-10  text-6xl flex items-center justify-center '>{count.approved}</span>
          </div>
          <div className=' w-120 h-60  bg-white border-t-4 border-indigo-500 text-2xl text-center rounded m-2 '>
            <h1 className='text-indigo-600'>visitor check-in</h1>
               <span  className=' m-10  text-6xl flex items-center justify-center '>{count.checkedin}</span>
            </div>
           
              <div className='w-120 h-60 bg-white border-t-4 border-rose-500 text-2xl text-center rounded m-2 '>
                <h1 className=' text-rose-600'>visitor Rejected</h1>
               <span  className=' m-10  text-6xl flex items-center justify-center '>{count.rejected}</span>
             </div>
        </div>
      </div>
    </div>
  )
}

export default Securitydash