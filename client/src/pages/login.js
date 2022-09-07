import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { LOGIN_USER } from '../utils/mutations'

function Login(props) {

  const [formInput, setFormInput] = useState({
    email: '',
    password: '',
    type: 'login'
  });

  const navigate = useNavigate();

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
     navigate('/world')
  }
  
  const handleInputChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <label>Email</label>
          <input onChange={handleInputChange} value={formInput.email} type="text" name='email' required />
        </div>
        <div className='input-container'>
          <label>Password</label>
          <input onChange={handleInputChange} value={formInput.password} type='password' name='password' required />
        </div>
        <div className='button-container'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );

  
}

export default Login