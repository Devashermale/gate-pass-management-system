import axios from 'axios'
import { useState } from 'react'
import { useAuthcontext } from './useAuthcontext'

function useSignup() {
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(null)
    const { dispatch } = useAuthcontext()
    const Signup = async (email, password) => {
        setloading(true)
        seterror(null)
        try {
            const res = await axios.post('http://localhost:8080/user/signup', {
                email: email,
                password: password

            })
            if (res.status === 200 || res.status === 201) {
                localStorage.setItem('user', JSON.stringify(res.data));

                dispatch({ type: 'LOGIN', payload: res.data });

                return res.data;
            }
            return res.data
        } catch (error) {
            seterror(error)
        } finally {
            setloading(false)
        }

    }
    return { Signup, loading, error }


}


export default useSignup
