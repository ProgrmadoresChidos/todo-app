import React, { useContext, useEffect, useState } from 'react'
import { addTodo } from '../actions/todo';
import { TodoContext } from '../context/TodoContext'

export const AddNewTodo = () => {

    const { todos, dispatch } = useContext(TodoContext);
    const [formValue, setFormValue] = useState({
        inputTodo: ''
    });
    const { inputTodo } = formValue;

    useEffect(() => {
        console.log(todos);
    }, [todos]);

    const handleInput = ({ target }) => {
        setFormValue({
            ...formValue,
            [target.name]: target.value
        });
    }

    const hadleAddTodo = (e) => {
        e.preventDefault();
        const newTodo = {
            id: new Date().getTime(),
            desc: inputTodo,
            active: true
        };
        dispatch(addTodo(newTodo));
    }

    return (
        <div className="addtodo">
            <div className="addtodo__form">
                <form onSubmit={hadleAddTodo}>
                    <input
                        onChange={handleInput}
                        value={inputTodo}
                        name="inputTodo"
                        type="text"
                        placeholder="add deatils"
                        className="addtodo__input" />
                    <button type="submit" className="addtodo__button" >Add</button>
                </form>
            </div>
        </div>
    )
}
