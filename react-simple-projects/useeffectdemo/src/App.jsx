import React, {useState} from 'react'
import './App.css'
import CounterApp from './components/CounterApp';

function App() {
  const [state, setState] = useState(true);

  return (
    <>
     <button onClick={(e) => setState(!state)}>Toggle Counter</button><hr />
     {state ? <CounterApp /> : null}  
    </>
  )
}

export default App;
