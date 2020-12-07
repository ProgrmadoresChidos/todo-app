import React, { useContext } from 'react'
import { todoToggle } from '../actions/todo';
import { TodoContext } from '../context/TodoContext'

export const TodoListItem = ({ id, desc, active }) => {

    const { dispatch } = useContext(TodoContext);

    const handleToggle = (id) => {
        dispatch(todoToggle(id))
    }

    return (
        <div className="todoListitem">
            <div className="todoListitem__content mouse" onClick={() => { handleToggle(id) }}>
                <div className={`todoListitem__checkbox ${(!active) ? "todoListitem__checkbox-active" : ""}`} >
                    {
                        !active && (
                            <div className="todoListitem__checkbox-checked"></div>
                        )
                    }
                </div>
                <p className={`todoListitem__span ${!active && "todoList__desc-toggle"}`}>{desc}</p>
            </div>
        </div>
    )
}
