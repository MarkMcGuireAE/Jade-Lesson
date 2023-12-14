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
            console.log(state, action)

            // let index = state.findIndex((todo) => todo.id === action.payload)
            // state.splice(index, 1)
            
            return state.filter((item) => item.id !== action.payload)
        },
        completeTodo: (state, action) => {
            let index = state.findIndex((todo) => todo.id === action.payload)
            state[index].completed = !state[index].completed
        }
    }
})

export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions

export default todoSlice.reducer