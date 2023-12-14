import { useDispatch } from "react-redux";

import { deleteTodo, completeTodo } from "../todoSlice";

function Todo({ item }) {

  const dispatch = useDispatch()

  return (
    <li style={{ listStyle: "none" }}>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => dispatch(completeTodo(item.id))}
      />
      {item.text}
      <button onClick={() => dispatch(deleteTodo(item.id))}>x</button>
    </li>
  );
}

export default Todo;
