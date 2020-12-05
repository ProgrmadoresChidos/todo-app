import React from 'react'

export const AddNewTodo = () => {
    return (
        <div className="addtodo">
            <div className="addtodo__form">
                <input type="text" placeholder="add deatils" className="addtodo__input" />
                <button className="addtodo__button" >Add</button>
            </div>
        </div>
    )
}
