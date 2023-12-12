import Todo from "./Todo";

function TodoList({ todos, listType, dispatch }) {
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
          dispatch={dispatch}
        />
      ))}
    </ul>
  );
}

export default TodoList;
