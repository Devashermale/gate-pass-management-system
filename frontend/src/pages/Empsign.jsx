import React, { use, useState } from 'react'
import useEmpsign from '../hooks/useEmpsign'
import { useNavigate } from 'react-router-dom'
function Empsign() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const { Empsign, loading, error } = useEmpsign()
    const navigate = useNavigate()
    const handleclick = async () => {
        const sign = await Empsign(email, password)
        if (sign) {
            navigate('/employee-dashboard')
        }
    }


    return (
        <>
            <div>
                <div className=' flex items-center justify-center h-screen bg-slate-100'>
                    <div className=' size-80 gap-4 p-5 border-2  bg-white shadow-md border-t-4 border-blue-600'>
                        <h1 className=' font-bold text-3xl text-center '>Welcome 🖐🏼</h1>
                        <h1 className=' font-bold text-3xl text-center'>employee signup</h1>
                        <label className=' text-slate-700 font-medium text-lg'>Email</label>
                        <input type='text' className=' w-full h-10 focus:ring-blue-500 focus:border-blue-500' placeholder='enter your Email' onChange={(e) => setemail(e.target.value)} />
                        <label className='text-slate-700 font-medium text-lg'>Password</label>
                        <input type='text' className=' w-full h-10 focus:ring-blue-500 focus:border-blue-500' placeholder='enter your Email' onChange={(e) => setpassword(e.target.value)} />
                        <button type='submit' className=' w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white h-10 rounded' disabled={loading} onClick={handleclick} >submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Empsign