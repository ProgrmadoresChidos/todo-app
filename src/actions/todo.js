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
export const todoActive = () => (
    {
        type: types.todoActive
    }
)