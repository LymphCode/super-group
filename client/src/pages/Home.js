import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const renderHome = (
    <div class='Wrapper'>
      <h1>PlaceHolder Title</h1>
      <ul>
        <li><Link to="Login">Login</Link></li>
        <li><Link to="register">Register</Link></li>
      </ul>
    </div>
  )

  return renderHome
}

export default Home