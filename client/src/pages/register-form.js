import React from 'react';

export default class Register extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
  }

  onChange = (e) => {
    const value = e.target.checked ? e.target.value : e.target.checked;
    this.setState({
      [e.target.name]: value
    })
  }

  render() {
    return (
      <div>
        <h1>Registration</h1>
        <form>
          <input
            name= 'username'
            placeholder='username'
            onchange={e => this.onChange(e)}/>
          <input
            name= 'email'
            placeholder='Enter your email address'
            type= 'email'
            value= {e => this.onChange(e)}/>
          <input
            name= 'password'
            placeholder= 'Enter a password'
            type= 'password'
            value= {e => this.onChange(e)}/>
        </form>
      </div>
    )
  }
}