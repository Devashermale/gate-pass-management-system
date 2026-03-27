import axios from 'axios'
import { useState } from 'react'
import { useAuthcontext } from './useAuthcontext'

function useEmpsign() {
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(null)
    const { dispatch } = useAuthcontext()
    const Empsign = async (email, password) => {

        try {
            const res = await axios.post('http://localhost:8080/employees/signup', {
                email: email,
                password: password
            })
            if (res.status === 200 || res.status === 201) {
                localStorage.setItem('user', JSON.stringify(res.data));

                dispatch({ type: 'LOGIN', payload: res.data });
            }

            console.log("signup successful", res.data);
            return res.data
        } catch (error) {
            seterror(error)
        } finally {
            setloading(null)
        }
    }

    return { Empsign, loading, error }

}

export default useEmpsign