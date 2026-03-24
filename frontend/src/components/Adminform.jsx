import axios from 'axios'
import React, {  useState } from 'react'

function Adminform() {
  const [name ,setname] = useState('')
  const [dept ,setdept] = useState('')
  const [degn , setdegn] = useState('')
 const [ join ,setjoin] = useState('')
 const [ file ,setfile] = useState(null)
 const [ loading ,setloading] = useState(false)
 const[error ,seterror] = useState(null)
const handleChange = (event) =>
   setdegn(event.target.value);

const handlesubmit =async () => {
  try {
    const res = await axios.post('http://localhost:8080/emp/empdata',{
      Empname:name,
      empdept:dept,
      Designation:degn,
      joiningdate:join,
      path:file
    })
    console.log('received data' ,res.data)
     return res.data
  } catch (error) {
    seterror(error)
  }finally{
    setloading(true)
  }
}

  return (
    <div className=' bg-slate-50'>
        <div className=' flex items-center justify-center h-screen bg-slate-50 '>
          <div className=' size-100 border border-slate-200 rounded-xl p-2'>
            <h1 className=' text-3xl text-center text-slate-900 font-bold'>Employee Registration</h1>
            <label children>profile</label>
            <input type='file' className=' w-full h-9 rounded-full border-b-gray-300' onChange={(e)=>setfile(e.target.value)}/>
            <label>Employee name</label>
            <input type='text' placeholder='enter employee name' className=' w-full h-9 border-b-gray-300' onChange={(e)=>setname(e.target.value)}/>
            <label>Employee department name</label>
            <input type= 'text' className=' w-full h-9 border-b-gray-300' placeholder=' enter employee department' onChange={ (e)=>setdept(e.target.value)}/>
            <label className=' w-full  text-center border-b-gray-300' onChange={handleChange}>Designation</label>
            <select className='w-full h-9 border-b-gray-300'>
                <option value="customer">customer support</option>
                <option value="it">it</option>
                <option value="">security</option>
                <option value="">manager</option>
                <option value="">ceo</option>
            </select>
            <label>joining date</label>
            <input  className='w-full h-9 border-b-gray-300 m-2' type='date' onChange={(e)=>setjoin(e.target.value)} />
            <button  className='w-full h-9 bg-indigo-600'>submit</button>
              </div>
        </div>
    </div>
  )
}

export default Adminform