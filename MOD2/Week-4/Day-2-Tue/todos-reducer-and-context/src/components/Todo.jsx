import { useTodosContext } from '../todosContext'

function Todo({ item }) {

  const { dispatch } = useTodosContext()

  return (
    <li style={{ listStyle: "none" }}>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => dispatch({ type: 'COMPLETE_TODO', payload: item.id})}
      />
      {item.text}
      <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: item.id})}>x</button>
    </li>
  );
}

export default Todo;
