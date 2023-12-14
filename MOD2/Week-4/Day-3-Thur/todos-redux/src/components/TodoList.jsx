import { useSelector } from "react-redux";
import Todo from "./Todo";

function TodoList({ listType }) {

  const todos = useSelector((state) => state.todos)

  let filteredTodos = todos.filter((item) => {
    if (listType === "all") {
      return true;
    } else if (listType === "complete") {
      if (item.completed === true) {
        return true;
      }
    } else {
      if (item.completed === false) {
        return true;
      }
    }
    return false;
  });

  return (
    <ul>
      {filteredTodos.map((item) => (
        <Todo
          key={item.id}
          item={item}
        />
      ))}
    </ul>
  );
}

export default TodoList;
