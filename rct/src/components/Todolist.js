import React, {useState} from "react";

function Todolist(){
  const [todos,setTodos] = useState([]);
  const [inputVal,setInputVal] = useState('');

  const handleChange = (e) =>{
    setInputVal(e.target.value);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    setTodos([...todos, inputVal]);
    setInputVal('');
  }
  const handleDel = (index) =>{
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }

  return (
    <div>
      <form>
        <input type="text" value={inputVal} onChange={handleChange}/>
        <button onClick={handleSubmit}>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}
            <button onClick={() => handleDel(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Todolist;