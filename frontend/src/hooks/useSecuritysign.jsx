import { useState } from 'react'
import axios from 'axios'
import { useAuthcontext } from './useAuthcontext'

function useSecuritysign() {
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(null)
    const { dispatch } = useAuthcontext()

    const SignupSecurity = async (email, password) => {
        setloading(true)
        seterror(null)

        try {
            const res = await axios.post('http://localhost:8080/security/signup', {
                email,
                password
            })

            if (res.status === 200 || res.status === 201) {
                localStorage.setItem('user', JSON.stringify(res.data));

                dispatch({ type: 'LOGIN', payload: res.data });

                return res.data;
            }
        } catch (err) {
            seterror(err.message);
            return null;
        } finally {
            setloading(false);
        }
    }

    return { SignupSecurity, loading, error }
}

export default useSecuritysign