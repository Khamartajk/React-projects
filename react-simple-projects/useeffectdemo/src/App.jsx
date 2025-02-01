import React, { useState, useEffect } from "react";
import "./App.css";
import CounterApp from "./components/CounterApp";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => setTodos(response.data));
  }, []);
  return (
    <>
      <div className="container">
        <h1>Todo List</h1>
        <hr />
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <p>{todo.id}</p>,{todo.title},{todo.completed}
            </li>
          ))}
        </ul>
      </div>
    </>

    /* <button onClick={(e) => setState(!state)}>Toggle Counter</button><hr />
     {state ? <CounterApp /> : null}   */
  );
}

export default App;
