import React, { useContext, useState } from 'react'
import { addTodo } from '../actions/todo';
import { TodoContext } from '../context/TodoContext'

export const AddNewTodo = () => {

    const { dispatch } = useContext(TodoContext);
    const [formValue, setFormValue] = useState({
        inputTodo: ''
    });
    const { inputTodo } = formValue;

    const handleInput = ({ target }) => {
        setFormValue({
            ...formValue,
            [target.name]: target.value
        });
    }

    const hadleAddTodo = (e) => {
        e.preventDefault();
        if (inputTodo.trim().length >= 2) {
            const newTodo = {
                id: new Date().getTime(),
                desc: inputTodo,
                active: true
            };
            dispatch(addTodo(newTodo));
            setFormValue({
                inputTodo: ''
            });
        }
    }

    return (
        <div className="addtodo">
            <div className="addtodo__form">
                <form onSubmit={hadleAddTodo}>
                    <input
                        autoComplete="off"
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
