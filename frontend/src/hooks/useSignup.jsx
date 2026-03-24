import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function useSignup() {
const[loading ,setloading] = useState(false)
const [error ,seterror] = useState(null)
const Signup = async (email, password) => {
    setloading(true)
    seterror(null)
    try {
       const res = await axios.post('http://localhost:8080/user/signup',{
          email:email,
          password:password

        })
        console.log('signup successful',res.data)
        return res.data
    } catch (error) {
        seterror(error)
    }finally{
        setloading(true)
    }
    
}
return {Signup , loading , error}


}


export default useSignup
