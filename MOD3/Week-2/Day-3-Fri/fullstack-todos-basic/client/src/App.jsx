import "./App.css";
import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";

export default function App() {
  let [todos, setTodos] = useState([]);
  let [input, setInput] = useState("");
  let [listType, setListType] = useState("all");

  useEffect(() => {

    const getData = async () => {
      try {
        const response = await fetch('/api/todos')
        const data = await response.json()
        console.log(data)
        setTodos(data)
      } catch(err) {
        console.error(err)
      }
    }

    getData()

  }, [])

  async function addToList() {
    try {

      let todo = {
        text: input
      };
  
      console.log(JSON.stringify(todo))
  
      const response = await fetch('/api/todos', {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
          'Content-Type': 'application/json'
        }
      })
  
      const newTodo = await response.json()
  
      console.log(newTodo)
  
      setTodos([...todos, newTodo]);
      setInput("");

    } catch(err) {
      console.log(err)
    }
  }

  function handleChange(event) {
    setInput(event.target.value);
  }

  async function deleteTodo(id) {

    try {

      await fetch(`/api/todos/${id}`, {
        method: 'DELETE'
      })

      let newTodos = todos.filter((todo) => todo._id !== id);
      setTodos(newTodos);

    } catch(err) {
      console.log(err)
    }
    
  }

  async function completeTodo(id) {

    try {

      let newTodos = [...todos]
      let todo = newTodos.find(t => t._id === id)
      todo.completed = !todo.completed
    
      await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify(todo),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      setTodos(newTodos);
      
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Todos ({listType})</h1>

      <TodoList
        todos={todos}
        listType={listType}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
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
