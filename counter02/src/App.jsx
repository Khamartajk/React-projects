import { useState } from 'react';
import './App.css'

function App() {
    const [count,setCount] = useState(10)
    

    //function for add button
    const addValue =() => {
      setCount(count + 1)
    }

    //function for remove button
    const removeValue =() => {
      setCount(count - 1)
    }

  return (
    <>
      <h1>Welcome to React hooks</h1>
      <h2>Counter value : {count}</h2>
      <button onClick={addValue}>Add Value : {count}</button>

      <button onClick={removeValue}>Remove Value : {count}</button>
    </>
  )
};

export default App;
