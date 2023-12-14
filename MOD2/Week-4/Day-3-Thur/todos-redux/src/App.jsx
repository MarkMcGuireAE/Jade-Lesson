import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { addTodo } from './todoSlice'


export default function App() {

  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const [input, setInput] = useState("");
  const [listType, setListType] = useState("all");

  function addToList() {
    dispatch(addTodo(input))
    setInput("");
  }

  function handleChange(event) {
    setInput(event.target.value);
  }

  // function deleteTodo(id) {
  //   let newTodos = todos.filter((item) => item.id !== id);
  //   setTodos(newTodos);
  // }

  // function completeTodo(id) {
  //   let newTodos = todos.map((item) =>
  //     item.id === id ? { ...item, completed: !item.completed } : item
  //   );

  //   setTodos(newTodos);
  // }

  return (
    <div>
      <h1>Todos ({listType})</h1>

      <TodoList
        listType={listType}
      />

      <input value={input} onChange={handleChange} />
      <button onClick={addToList}>Submit</button>

      <br />
      <br />

      <button onClick={() => setListType("all")}>All</button>
      <button onClick={() => setListType("complete")}>Completed</button>
      <button onClick={() => setListType("incomplete")}>Incomplete</button>
    </div>
  );
}
