import { useState, useEffect } from 'react';
// import AuthForm from './pages/Auth';
import Home from './pages/Home'
import Login from './pages/login'
import Register from './pages/register-form'
// import Cart from './pages/Cart'
import { Routes, Route } from 'react-router-dom';
// import {BsFillCartCheckFill} from 'react-icons/bs'
// import { isAuthenticated } from './utils/auth';


function App() {
  return (
    <div className='row'>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        {/* <Route exact path="/Cart" element={<Your_Cart />} /> */}
      </Routes>

    </div>
  );
}

export default App;
