import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext';
import { TodoListItem } from './TodoListItem';

export const TodoList = () => {

    // const todos = [1, 2, 3, 4];
    const { todos } = useContext(TodoContext);

    return (
        <div className="todoList">
            {
                todos.map((todo) => (
                    <TodoListItem key={todo.id} {...todo} />
                ))
            }
        </div>
    )
}
