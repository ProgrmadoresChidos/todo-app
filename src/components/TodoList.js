import React, { useContext, useEffect } from 'react'
import { TodoContext } from '../context/TodoContext';
import { TodoListItem } from './TodoListItem';
import { getCompleted } from '../actions/todo';

export const TodoList = ({ completed = false }) => {

    // const { todosItems: { todos = [] } } = useContext(TodoContext);
    // const todos = [1, 2, 3, 4];
    const { todosItems: { todos = [], activeTodo = [] }, dispatch } = useContext(TodoContext);

    useEffect(() => {
        if (completed) {
            dispatch(getCompleted());
        }
    }, [dispatch, completed, todos]);

    const todoList = completed ? activeTodo : todos;

    return (
        <div className="todoList">
            {
                todoList.map((todo) => (
                    <TodoListItem key={todo.id} {...todo} completed />
                ))
            }
            {
                completed ?
                    <div className="todoList__deleteWrapper">
                        <button>
                            <i class="material-icons md-18">delete_outline</i>
                            delete all
                        </button>
                    </div>
                    : null
            }
        </div>
    )
}
