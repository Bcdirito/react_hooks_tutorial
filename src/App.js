import React, { useState, useEffect } from 'react'
import randomcolor from 'randomcolor'
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const clickHandler = () => {
    setCount(prevCount => prevCount + 1)
  }

  useEffect(() => {
    setColor(randomcolor())
  }, [count])

  const submitHandler = (e) => {
    e.preventDefault()
    const userInfoString = `${username} - ${password}`
    document.getElementById("user-info").innerText = userInfoString
  }

  return (
    <div className="App">
      <h1 style={{color: color}}>{count}</h1>
      <button onClick={clickHandler}>Change!</button>

      <form onSubmit={e => submitHandler(e)}>
        <label>Username:</label>
        <input type="text" name="username" value={username} onChange={event => setUsername(event.target.value)}/>
        <br/>
        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={event => setPassword(event.target.value)}/>
        <br/>
        <input type="submit" />
      </form>
      <span id="user-info"></span>
    </div>
  );
}

export default App;
