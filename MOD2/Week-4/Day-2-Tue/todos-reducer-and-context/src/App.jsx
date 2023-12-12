import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";

import { useTodosContext } from "./todosContext";

export default function App() {

  const { dispatch } = useTodosContext()

  let [input, setInput] = useState("");
  let [listType, setListType] = useState("all");

  function handleChange(event) {
    setInput(event.target.value);
  }

  return (

      <div>
        <h1>Todos ({listType})</h1>

        <TodoList listType={listType} />

        <input value={input} onChange={handleChange} />
        <button onClick={() => {
              dispatch({ type: 'ADD_TODO', payload: input })
              setInput("");
        }}>Submit</button>

        <br />
        <br />

        <button onClick={() => setListType("all")}>All</button>
        <button onClick={() => setListType("complete")}>Completed</button>
        <button onClick={() => setListType("incomplete")}>Incomplete</button>
      </div>

  );
}
