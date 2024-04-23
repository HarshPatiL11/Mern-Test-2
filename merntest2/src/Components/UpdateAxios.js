import React, { useState } from 'react'
import axios from 'axios'

const UpdateAxios = () => {
    const data ={name:"",surname:""}
    const [userinput,setuserinput] =useState(  data)
    const handleChange=(e)=>{
      setuserinput({ ...userinput,[e.target.name]:e.target.value})
    }

    const handlesubmit= (e)=>{
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/users',userinput)
        .then((response)=>{
            console.log(response);

        })
    }

    const handleput= (e)=>{
      e.preventDefault()
      axios.put('https://jsonplaceholder.typicode.com/users/1',userinput)
      .then((response)=>{
          console.log(response);

      })
  }


  const delFuntion= (e)=>{
    e.preventDefault()
    axios.delete('https://jsonplaceholder.typicode.com/users/1',userinput)
    .then((response)=>{
        console.log(response);

    })
}



  return (
    <div className='postaxios'>

        <div className='inputDiv'>
        <label>Name</label>
      <input name='name' type='text' value={userinput.name} onChange={handleChange}/><br/>
      <label>Surname</label>
      <input name='surname' type='text' value={userinput.surname} onChange={handleChange}/><br/>
      <button onClick={handlesubmit}>submit</button>
      <button onClick={handleput}>update</button>
      <button onClick={delFuntion}>update</button>
        </div>
      
    </div>
  )
}

export default UpdateAxios
