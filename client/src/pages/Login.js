import { useState } from 'react'


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
    console.log(data)
  }

  return (
    <div className="App">
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
        <br />
        <input type="submit" value="Register"/>
      </form>
    </div>
  );
}

export default App;
