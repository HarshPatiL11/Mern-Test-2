import React from 'react'
import "../Assets/Navbar.css"

const Navbar = () => {
  return (
    <div>
        <div className='NavBarMaindiv'>
            <ul className='Navlist'>
        <li className='Navimg'> <img src='' alt='Harsh'/></li>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/showdata" >Show Userdata</a></li>
        <li><a href="/update" >Edit Userdata</a></li>
        <li><a href="/Login" >Login</a></li>
      </ul></div>
      
    </div>
  )
}

export default Navbar
