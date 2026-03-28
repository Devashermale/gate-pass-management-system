import React from 'react'
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
      <div className=' h-screen bg-amber-900'>
        <Empnav />
        <div className=' grid grid-cols-3 m-8'>
          <div className='w-120 h-60   bg-blue-800 border-2 text-2xl text-center rounded m-2'>
            whole visitors count
            <span className=' m-10  text-6xl flex items-center justify-center '>{count.total}</span>
          </div>
        
          <div className='w-120 h-60  bg-blue-800 border-2 text-2xl text-center rounded m-2 '>
            approved visitor
            <span className=' m-10  text-6xl flex items-center justify-center '>{count.approved}</span>
          </div>
          <div className=' w-120 h-60  bg-blue-800 border-2 text-2xl text-center rounded m-2'>
            Rejected visitor
            <span className=' m-10  text-6xl flex items-center justify-center '>{count.rejected}</span>
          </div>
          <div className=' w-120 h-60   bg-blue-800 border-2 text-2xl text-center rounded m-2 '>
            pending visitor
            <span className=' m-10  text-6xl flex items-center justify-center '> {count.pending}</span>
           
          </div>

        </div>

      </div>
    </div>
  )
}

export default Empdash