import React from 'react'

export const TodoListItem = ({ desc, active }) => {

    return (
        <div className="todoListitem">
            <div className="todoListitem__content mouse">
                <div className={`todoListitem__checkbox ${(!active) ? "todoListitem__checkbox-active" : ""}`} >
                    {
                        !active && (
                            <div className="todoListitem__checkbox-checked"></div>
                        )
                    }
                </div>
                <p className={`todoListitem__span ${ !active && "todoList__desc-toggle"}`}>{desc}</p>
            </div>
        </div>
    )
}
