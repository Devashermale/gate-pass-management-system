import { useState } from 'react'
import useSecuritysign from '../hooks/useSecuritysign'
import { useNavigate } from 'react-router-dom'

function Securitysign() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const { SignupSecurity, loading, error } = useSecuritysign()
    const navigate = useNavigate()
    const handleclick = async () => {

        const sign = await SignupSecurity(email, password)

        if (sign) {
            navigate('/security-dashboard')
        }
    }

    return (
        <>
            <div>
                <div className=' flex items-center justify-center h-screen bg-slate-950'>
                    <div className=' size-70 gap-4 p-5 border-2 border-black bg-white rounded'>
                        <h1 className=' font-bold text-3xl text-center text-slate-900'>security signup</h1>
                        <label className=' text-lg font-semibold'>Email</label>
                        <input type='text' className=' w-full h-10 border-slate-300 focus:border-blue-600 focus:ring-blue-600' placeholder='enter your Email' onChange={(e) => setemail(e.target.value)} />
                        <label className=' font-semibold text-lg'>Password</label>
                        <input type='text' className=' w-full h-10 border-slate-300 focus:border-blue-600 focus:ring-blue-600' placeholder='enter your Email' onChange={(e) => setpassword(e.target.value)} />
                        <button type='submit' className=' w-full mt-2 bg-blue-700 hover:bg-blue-800 text-white h-10  rounded' disabled={loading} onClick={handleclick} >submit</button>
                        {error && <div>{error.message}</div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Securitysign