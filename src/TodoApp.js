import React, { useReducer } from 'react'
import { AddNewTodo } from './components/AddNewTodo'
import { TodoContext } from './context/TodoContext';
import { todoReducer } from './reducer/todoReducer'

export const TodoApp = () => {

    const initTodos = [
        {
            id: new Date().getDate(),
            desc: 'test',
            active: true
        }
    ]

    const [todos, dispatch] = useReducer(todoReducer, initTodos);

    return (
        <TodoContext.Provider value={{
            todos,
            dispatch
        }}>
            <div>
                todo works
                <AddNewTodo />
            </div>
        </TodoContext.Provider>
    )
}
