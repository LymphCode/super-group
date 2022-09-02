import { useState, useEffect } from 'react';
import AuthForm from './pages/Auth';
import Registration from './pages/register-form'
import { Routes, Route } from 'react-router-dom';
import { isAuthenticated } from './utils/auth';


function App() {
  return (
    <div>
      <Router>
          <Route exact path="/register" render={props => <Register {...props} />} />
          <Route exact path="/auth" render={props => <Auth {...props} />} />
      </Router>
    </div>
  );
}

export default App;
