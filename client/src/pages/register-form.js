import { useState, ReactDOM } from 'react';
import {ADD_USER } from '../utils/mutations'
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

function Register(props) {

  const [formInput, setFormInput] = useState({
    email: '',
    password: '',
    type: 'register'
  });


  const handleInputChange = (e) => {
    console.log(formInput)
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    })
  }
  const [addUser] = useMutation(ADD_USER, {
    variables: formInput
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('sumbited')
    
    let user, token;
    let mutation = addUser
      const { data } = await mutation();

      user = data[addUser].user;
      token = data[addUser].token;

      localStorage.setItem('token', token);
      props.setUser(user);
     navigate('/')
  }




  const navigate = useNavigate();
  
  const renderPage = (
    <div>
      <h1>Registration</h1>
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

  return renderPage
}

export default Register