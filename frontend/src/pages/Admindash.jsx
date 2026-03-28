import React from 'react'
import Adminform from '../components/Adminform'
import Adminnav from '../components/Adminnav'
function Admindash() {
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

      <div className=' bg-amber-700'>
        <Adminnav />
        <div className=' grid grid-cols-3'>
          <div className='w-120 h-60   bg-blue-800  border-2 text-2xl text-center rounded m-2 '>whole visitor
            <span className=' m-10  text-6xl flex items-center justify-center '> {count.total}</span>
          </div>
         
        <div className='w-120 h-60  bg-blue-800    border-2 text-2xl text-center rounded m-2 '>visitor approved
    <span className=' m-10  text-6xl flex items-center justify-center '>{count.approved}</span>
</div>
          <div className='w-120 h-60   bg-blue-800  border-2 text-2xl text-center rounded m-2 '>rejected visitor
            <span className=' m-10  text-6xl flex items-center justify-center '>{count.rejected}</span>
          </div>
          <div className='w-120 h-60  bg-blue-800  border-2 text-2xl text-center rounded m-2 '>pending
            <span className=' m-10  text-6xl flex items-center justify-center '>{count.pending}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admindash