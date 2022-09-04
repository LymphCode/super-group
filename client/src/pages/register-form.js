import { useState } from 'react';
import ReactDOM from 'react';

function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  
  const renderPage = (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <label>Email</label>
          <input type="text" name='email' required />
        </div>
        <div className='input-container'>
          <label>Password</label>
          <input type='password' name='pass' required />
        </div>
        <div className='button-container'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );

  return renderPage
}

export default Register