import { useState, useEffect } from 'react';
// import AuthForm from './pages/Auth';
import Home from './pages/Home'
import Login from './pages/login'
import Register from './pages/register-form'
import { Routes, Route } from 'react-router-dom';
// import { isAuthenticated } from './utils/auth';


function App() {
  const [user, setUser] = useState(null);

  return (
    <div className='row'>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
