import { useState } from 'react';
import {ADD_USER } from '../utils/mutations'
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
function Register(props) {
  const [addUser, { data, loading, error }] = useMutation(ADD_USER);
  if (loading) {console.log('Submitting...') }
  if (error) console.log(`Submission error! ${error.message}`);
  if (data) console.log(`Submission error! partyyyy!`);
  
  
  const [formInput, setFormInput] = useState({
    email: '',
    password: '',
    type: 'register'
  });

//   const [addUser] = useMutation(ADD_USER, {
//  variables: { email: formInput.email,
//   password: formInput.password,}
//   });

  const handleInputChange = (e) => {
    console.log(formInput)
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    })
  }


  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('tokentest')
    // console.log(addUser())

    let user, token;
    // let mutation = addUser
    console.log('token11')
    const { data } = await addUser({variables: { email: formInput.email,
      password: formInput.password,}});
    console.log('token222')
    // user = data['addUser'].user;
    // token = data['addUser'].token;
    console.log(user)
    localStorage.setItem('token', token);
    props.setUser(user);
    navigate('/')
  }




return (
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
}

export default Register