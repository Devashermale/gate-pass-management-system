import { useState } from 'react'
import axios from 'axios'
import { useAuthcontext } from './useAuthcontext'

function useAdminsignup() {
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(null)
    const { dispatch } = useAuthcontext()

    const Signupadmin = async (email, password) => {
        setloading(true)
        seterror(null)

        try {
            const res = await axios.post('http://localhost:8080/admin/signup', {
                email:email,
                password:password
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

    return { Signupadmin, loading, error }
}

export default useAdminsignup