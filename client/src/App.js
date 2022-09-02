import { useState, useEffect } from 'react';
// import AuthForm from './pages/Auth';
import Login from './pages/login'
import Register from './pages/register-form'
import { Routes, Route } from 'react-router-dom';
// import { isAuthenticated } from './utils/auth';


function App() {
  return (
    <div className='row'>
      <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/" element={<Login />} />
          {/* <Route exact path="/auth" render={props => <Auth {...props} />} /> */}
      </Routes>
    </div>
  );
}

export default App;
