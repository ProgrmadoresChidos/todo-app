import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext';
import { TodoListItem } from './TodoListItem';

export const TodoList = () => {

    const { todosItems: { todos = [] } } = useContext(TodoContext);

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
