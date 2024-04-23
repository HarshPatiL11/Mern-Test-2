import React, { useEffect, useState } from 'react'
import axios from "axios";

import '../Assets/Get.css'


const GetAxios = () => {
  const[userdata,setuserdata] = useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{setuserdata(response.data)})
    
},[])

  return (
    <div>
      {userdata.map((data)=>{
        return(
          <h1><span>{data.id})</span>
          <span>{data.name}</span><br/></h1>
   

        )
      })

      }
    </div>
  )
}

export default GetAxios
