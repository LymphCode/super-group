import { useState } from 'react';
import ReactDOM from 'react';

function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const renderErrMessage = (name) => {
    name === errorMessages.name && (
      <div className='error'>{errorMessages.message}</div>
    );
  }

  const renderPage = (
    <div className='form'>
      <form>
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

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return renderPage
}

export default Login