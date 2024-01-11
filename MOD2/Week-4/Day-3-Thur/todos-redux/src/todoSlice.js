import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            let newTodo = {
                text: action.payload,
                completed: false,
                id: crypto.randomUUID() 
            };
            state.push(newTodo)
        },
        deleteTodo: (state, action) => {
        
            // OPTION 1: Mutate the state directly
            // let index = state.findIndex((todo) => todo.id === action.payload)
            // state.splice(index, 1)
            
            // OPTION 2: Make a copy, change it, return it (original way)
            return state.filter((item) => item.id !== action.payload)
        },
        completeTodo: (state, action) => {
            
            // OPTION 1: Mutate the state directly
            // let index = state.findIndex((todo) => todo.id === action.payload)
            // state[index].completed = !state[index].completed

            // OPTION 2: Make a copy, change it, return it (original way)
            let newTodos = state.map((item) =>
                item.id === action.payload ? { ...item, completed: !item.completed } : item
            );
            return newTodos
        }
    }
})

export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions

export default todoSlice.reducer