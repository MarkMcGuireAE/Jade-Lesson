import { createContext, useContext, useReducer } from 'react'

import reducer from './reducer'

const TodosContext = createContext()

// custom hook
export function useTodosContext() {
    return useContext(TodosContext)
}

export default function TodosProvider({ children }) {

    let [todos, dispatch] = useReducer(reducer, [])

    return (
        <TodosContext.Provider value={{ todos, dispatch }}>
            {children}
        </TodosContext.Provider>
    )
}
