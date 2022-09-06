import { useState, useEffect } from 'react';
// import AuthForm from './utils/auth';
import Home from './pages/Home'
import Login from './pages/login'
import Register from './pages/register-form'
import { Routes, Route } from 'react-router-dom';
import Protect from './components/Protect';
import { isAuthenticated } from './utils/auth';
import World from './pages/reactThree'


function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const user_data = isAuthenticated();

    if (user_data) setUser(user_data)
  }, []);

  useEffect(() => {
    const user_data = isAuthenticated();

    if (user_data) setUser(user_data);
  }, []);

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Protect>
          <Home user={user} />
        </Protect>} />
        <Route exact path="/register" element={<Protect>
          <Register setUser={setUser} />
        </Protect>} />
        <Route exact path="/login" element={<Protect>
          <Login setUser={setUser} />
        </Protect>} />
        <Route exact path='/World' element={<Protect>
          <World />
        </Protect>} />
      </Routes>
    </div >
  );
}

export default App;
