import React, {useState} from "react";
import Todolist from "./components/Todolist"
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () =>{
    setCounter(counter+1);
  }
  const decrement = () =>{
    setCounter(counter-1);
  }
  return (
    <div className="main">
      <h1>Counter in <span className="primary bold">React</span></h1>
      <hr/>
      <p>Count is {counter}</p>
      <button onClick={increment}>+</button> 
      <button onClick={decrement}>-</button>
      <br/>
      <h1>Todo List in <span className="primary bold">React</span></h1>
      <hr/>
      <Todolist/>
    </div>
  );
}

export default App;
