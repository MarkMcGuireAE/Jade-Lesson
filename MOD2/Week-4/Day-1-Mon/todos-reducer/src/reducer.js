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
      default: 
        return state
    }
}