import axios from 'axios'
import React, { useEffect, useState } from 'react'

function useEmpsign() {
  const [loading ,setloading] = useState(false)
  const [ error ,seterror]= useState(null)
    const Empsign =async (email ,password) => {
    
            try {
              const res = await axios.post('',{
                    email:email,
                    password:password
                })
                console.log("signup successful",res.data );
                return res.data
            } catch (error) {
                seterror(error)
            }finally{
                setloading(null)
            }
    }

    return {Empsign ,loading ,error}

}

export default useEmpsign