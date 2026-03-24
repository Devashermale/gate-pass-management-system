
import React, { useState } from 'react'
import axios from 'axios'

function useRegister() {
    const [error ,seterror] = useState(null)
    const [loading , setloading] = useState(false)
     const  Login = async (name ,email , password) => {
      setloading(true) 
        seterror(null)   
        
        try {
         const res =  await axios.post('http://localhost:8080/user/register', {
            name:name,
            email:email,
            password:password
        
        })
        console.log('Registration successful:', res.data)
      return res.data  

        } catch (error) {
          seterror(error)         
        }finally{
            setloading(true)
        }
     

    }
  return {Login,loading,error}
}

export default useRegister