import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function useAdminsignup() {
const [ loading ,setloading] = useState(false)
const [ error ,seterror] = useState(null)

 const Signupadmin = async (email ,password) => {
        setloading(true)
        setloading(null)
    
try {
  const res= await axios.post('http://localhost:8080/admin/signup',{
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
return{Signupadmin ,loading,error}
}

export default useAdminsignup