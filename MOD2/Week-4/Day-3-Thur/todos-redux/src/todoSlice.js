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
        }
    }
})

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer