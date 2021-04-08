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

  return (
    <div className="App">
      <h1 style={{color: color}}>{count}</h1>
      <button onClick={clickHandler}>Change!</button>

      <form>
        <label>Username:</label>
        <input type="text" name="username" value={username}/>
        <br/>
        <label>Password:</label>
        <input type="password" name="password" value={password} />
      </form>
    </div>
  );
}

export default App;
