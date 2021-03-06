import React from 'react'
import { useState } from 'react'
import './Login.css'


function App() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  
  async function loginUser(event) {
    event.preventDefault()

    const response = await fetch('http://localhost:1337/api/login', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
        userName,
        password,
      }),
    })
    const data = await response.json()

    if(data.user){
      localStorage.setItem('token', data.user)
      alert('Login Successful')
      window.location.href = '/classlist'
    } else {
      alert('Please check your username!')
    }
  }

  return (
    <div className="App">
      <div className ="loginbox">
        <loginbox>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <input 
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text" 
          placeholder="Username" 
        />
        <br />
        <input 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password" 
          placeholder="Password" 
        />
        <br/><br/>
        <input type="submit" value="Login"/>
      </form>
      <br/>
      <a href="Register">Register here</a><br/>
      <br/>
      <a href="Homescreen">Go back home!</a><br/>
      </loginbox>
      </div>
    </div>
  );
}

export default App;