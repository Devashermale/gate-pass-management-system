
import React, { useState } from 'react'
import axios from 'axios'
import { useAuthcontext } from './useAuthcontext'
function useRegister() {
  const [error, seterror] = useState(null)
  const [loading, setloading] = useState(false)
  const { dispatch } = useAuthcontext()
  const Login = async (email, password) => {
    setloading(true)
    seterror(null)

    try {
      const res = await axios.post('http://localhost:8080/user/register', {
        email: email,
        password: password

      })
      if (res.status === 200 || res.status === 201) {
        localStorage.setItem('user', JSON.stringify(res.data));

        dispatch({ type: 'LOGIN', payload: res.data });
      }

      console.log('Registration successful:', res.data)
      return res.data

    } catch (error) {
      seterror(error)
    } finally {
      setloading(true)
    }


  }
  return { Login, loading, error }
}

export default useRegister