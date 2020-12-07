import { types } from "../types/types";

export const getTodos = () => (
    {
        type: types.todoList
    }
);
export const addTodo = (todo) => (
    {
        type: types.todoAdd,
        payload: todo
    }
);
export const todoToggle = (id) => (
    {
        type: types.todoToggle,
        payload: id
    }
)
export const getTodoActive = () => (
    {
        type: types.todoActive
    }
)
export const getCompleted = () => (
    {
        type: types.todoCompleted,
    }
);
export const removeAll = () => (
    {
        type: types.todoRemoveAll,
    }
);
export const removeTodo = id => (
    {
        type: types.todoRemove,
        payload: {
            id,
        }
    }
);
