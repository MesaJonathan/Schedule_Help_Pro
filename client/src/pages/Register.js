import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function App() {
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  
  async function registerUser(event) {
    event.preventDefault()

    const response = await fetch('http://localhost:1337/api/register', {
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
    
    if(data.status === 'ok'){
      navigate('/login')
    }
  }

  return (
    <div className="App">
      <h1>Register</h1>
      <form onSubmit={registerUser}>
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
        <input type="submit" value="Register"/>
      </form>
      <br/>
      <a href="Login">Login Here</a><br/><br/><br/><br/>
    </div>
  );
}

export default App;
