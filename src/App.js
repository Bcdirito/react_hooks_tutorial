import React, { useState } from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={clickHandler}>Change!</button>
    </div>
  );
}

export default App;
