import React, { useContext, useEffect } from 'react'
import { TodoContext } from '../context/TodoContext';
import { TodoListItem } from './TodoListItem';
import { getCompleted, getTodoActive, removeAll } from '../actions/todo';

export const TodoList = ({ completed = false, active = false }) => {

    // const { todosItems: { todos = [] } } = useContext(TodoContext);
    // const todos = [1, 2, 3, 4];
    const { todosItems: { todos = [], activeTodo = [] }, dispatch } = useContext(TodoContext);

    useEffect(() => {
        if (completed) {
            dispatch(getCompleted());
        } else if (active) {
            dispatch(getTodoActive());
        }
    }, [dispatch, completed, active, todos]);

    const todoList = completed ? activeTodo : active ? activeTodo : todos;

    const handleButton = () => {
        dispatch(removeAll());
    };

    return (
        <div className="todoList">
            {
                todoList ?
                    todoList.map((todo) => (
                        <TodoListItem key={todo.id} {...todo} completed />
                    ))
                    : null
            }
            {
                todoList.length && completed ?
                    <div className="todoList__deleteWrapper">
                        <button onClick={handleButton}>
                            <i className="material-icons md-18">delete_outline</i>
                            delete all
                        </button>
                    </div>
                    : null
            }
        </div >
    )
}
