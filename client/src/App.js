import { useState, useEffect } from 'react';
// import AuthForm from './utils/auth';
import Home from './pages/Home'
import Login from './pages/login'
import Register from './pages/register-form'
import { Routes, Route } from 'react-router-dom';
import { isAuthenticated } from './utils/auth';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user_data = isAuthenticated();

    if (user_data) setUser(user_data);
  }, []);

  return (
    <div className='row'>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register setUser={setUser}/>} />
        <Route exact path="/login" element={<Login setUser={setUser}/>} />
      </Routes>
    </div>
  );
}

export default App;
