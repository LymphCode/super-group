import ReactDOM from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER, LOGIN_USER } from '../utils/mutations'

function Register(props) {
  const [formInput, setFormInput] = useState({
    email: '',
    password: '',
    type: 'login'
  });

  const [addUser] = useMutation(ADD_USER, {
    variables: formInput
  });
  const [loginUser] = useMutation(LOGIN_USER, {
    variables: formInput
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    let user, token;
    let mutation = formInput.type === 'register' ? addUser : loginUser;
    let type = formInput.type === 'register' ? 'addUser' : 'loginUser';

    const { data } = await mutation();

    user = data[type].user;
    token = data[type].token;

    localStorage.setItem('token', token);
    props.setUser(user);

    navigate('/');
  }

  const handleInputChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    })
  }

  const renderPage = (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <label>Email</label>
          <input
            type="email"
            name='email'
            placeholder='Enter your email'
            value={formInput.email}
            onChange={handleInputChange}
            required />
        </div>
        <div className='input-container'>
          <label>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Enter a password'
            value={formInput.password}
            onChange={handleInputChange}
            required />
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