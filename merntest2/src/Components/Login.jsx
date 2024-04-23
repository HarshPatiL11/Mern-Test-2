import React, { useState } from 'react';
import "../Assets/LRpage.css";

const Login = () => {
  const [selected, setSelected] = useState('login');

  const handleUser = (type) => {
    setSelected(type);
  };

  return (
    <div>
      <div className='LRpageMain'>
        <div className='ClickDiv'>
          <label className={selected === 'login' ? 'selected' : ''} onClick={() => handleUser('login')}>Login</label>
          <label className={selected === 'register' ? 'selected' : ''} onClick={() => handleUser('register')}>Register</label>
        </div>
       
        <div className='LRContain'>
          <div className={selected === 'login' ? 'loginDIV' : 'loginDIV hidden'}>
            <h1>Login</h1>
            <br/>
            <h3>Enter email</h3>
            <input type='email' placeholder='Email ID Here'></input>
            <h3>Enter password</h3>
            <input type='password' placeholder='*********'></input><br/>
            <button >Log In</button>
          </div>
          <div className={selected === 'register' ? 'regiDiv' : 'regiDiv hidden'}>
            <h1>Register</h1>
            <h3>Enter Name</h3>
            <input type='text' placeholder='Full Name Here'/>
            <h3>Enter Email</h3>
            <input type='email' placeholder='Email ID Here'/>
            <h3>Set Password</h3>
            <input type='password' placeholder='Set Password'></input>
            <h3>Confirm Password</h3>
            <input type='password' placeholder='Confirm Password'></input><br/>
            <button >Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
