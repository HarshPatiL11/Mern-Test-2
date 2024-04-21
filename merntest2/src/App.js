import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom';
import About from './Components/About';
import GetAxios from './Components/Getaxios';
import PostAxios from './Components/PostAxios';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/showdata' element={<GetAxios/>}/>
        <Route path='/update' element={<PostAxios/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
