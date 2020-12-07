import React, { useContext, useEffect } from 'react'
import { TodoContext } from '../context/TodoContext';
import { TodoListItem } from './TodoListItem';
import { getCompleted } from '../actions/todo';

export const TodoList = ({ completed = false }) => {

    // const todos = [1, 2, 3, 4];
    const { todosItems: { todos = [], activeTodo = [] }, dispatch } = useContext(TodoContext);

    useEffect(() => {
        if (completed) {
            dispatch(getCompleted());
        }
    });

    const todoList = completed ? activeTodo : todos;

    return (
        <div className="todoList">
            {
                todoList.map((todo) => (
                    <TodoListItem key={todo.id} {...todo} completed />
                ))
            }
        </div>
    )
}
