export default function reducer(state, action) {
    switch(action.type) {
      case 'ADD_TODO':
        let item = {
          text: action.payload,
          completed: false,
          id: crypto.randomUUID() 
        };
  
        let newTodos = [...state, item];
        return newTodos
      case 'DELETE_TODO':
        let filteredTodos = state.filter((item) => item.id !== action.payload);
        return filteredTodos
      case 'COMPLETE_TODO':
        let completedTodos = state.map((item) =>
          item.id === action.payload ? { ...item, completed: !item.completed } : item
        );
        return completedTodos
      default: 
        return state
    }
}