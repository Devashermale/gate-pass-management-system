import React,{useState,useEffect} from 'react'
import Empnav from '../components/Empnav'
function Empdash() {
  const [count, setCount] = useState({
    total:0,
    pending: 0,
    approved: 0,
    rejected:0,
   
  });
  useEffect(()=>{
    try {
      const res = axios.get('http://localhost:8080/visitor/pass')

      const visitor = res.data 

    setCount ({
      total: visitor.length,
        pending: visitor.filter(v =>v.status === 'pending').length,
        approved: visitor.filter(v =>v.status === 'Approved').length,
       
         rejected:visitor.filter(v=>v.status=== 'rejected').length


    })
    } catch (error) {
      
    }
  },[])
  return (
    <div>
      <div className=' h-screen bg-gray-100 '>
        <Empnav />
        <div className=' grid grid-cols-3 m-8'>
          <div className='w-120 h-60 bg-white border-2 text-2xl shadow-sm border-blue-500 text-center rounded m-2'>
             <h1 className=' text-slate-500'>whole visitors count</h1>
            <span className=' text-slate-900 m-10 text-6xl flex items-center justify-center '>{count.total}</span>
          </div>
        
          <div className='w-120 h-60 bg-white   border-2 text-2xl text-center rounded m-2 shadow-sm border-emerald-500'>
            <h1 className=' text-slate-500'> approved visitor</h1>
           
            <span className=' m-10  text-6xl flex items-center justify-center '>{count.approved}</span>
          </div>
          <div className=' w-120  bg-white h-60 shadow-sm border-rose-500 border-2 text-2xl text-center rounded m-2'>
            <h1 className=' text-slate-500'>Rejected visitor</h1>
            <span className=' m-10  text-6xl flex items-center justify-center '>{count.rejected}</span>
          </div>
          <div className=' w-120 bg-white h-60 border-amber-500 shadow-sm border-2 text-2xl text-center rounded m-2 '>
            <h1 className=' text-slate-500'> pending visitor</h1>
           
            <span className=' m-10  text-6xl flex items-center justify-center '> {count.pending}</span>
           
          </div>

        </div>

      </div>
    </div>
  )
}

export default Empdash