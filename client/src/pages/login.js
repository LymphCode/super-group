import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import {ADD_USER, LOGIN_USER} from '../utils/mutations'

function Login(props) {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const renderErrMessage = (name) => {
    name === errorMessages.name && (
      <div className='error'>{errorMessages.message}</div>
    );
  }
  const [formInput, setFormInput] = useState({
    email: '',
    password: '',
    type: 'login'
  });

  const [loginUser] = useMutation(LOGIN_USER, {
    variables: formInput
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    let user, token;
    let mutation = loginUser
      const { data } = await mutation();

      user = data[loginUser].user;
      token = data[loginUser].token;

      localStorage.setItem('token', token);
      props.setUser(user);
    //  navigate('/main')
  }

  const renderPage = (
    <div className='form loginCard'>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <label>Email: </label>
          <input type="email" name='email' required />
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

export default Login