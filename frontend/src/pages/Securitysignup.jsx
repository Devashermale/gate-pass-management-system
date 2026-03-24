import React, { use, useState } from 'react'
import useEmpsign from '../hooks/useEmpsign'

function Securitysign() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const { Empsign, loading, error } = useEmpsign()
    const handleclick = async () => {
        await Empsign(email, password)
    }
    

    return (
        <>
            <div>
                <div className=' flex items-center justify-center h-screen'>
                    <div className=' size-60 gap-4 p-5 border-2 border-black'>
                        <h1 className=' font-bold text-2xl text-center'>security signup</h1>
                        <label className=' font-semibold'>Email</label>
                        <input type='text' className=' w-full h-10' placeholder='enter your Email' onChange={(e) => setemail(e.target.value)} />
                        <label className=' font-semibold'>Password</label>
                        <input type='text' className=' w-full h-10' placeholder='enter your Email' onChange={(e) => setpassword(e.target.value)} />
                        <button type='submit' className=' w-full mt-2 bg-black h-10 text-white rounded' disabled={loading} onClick={handleclick} >submit</button>
                        {error &&<div>{error}</div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Securitysign