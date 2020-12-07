import { types } from "../types/types";

export const todoReducer = (state, action) => {
    switch (action.type) {
        case types.todoList:
            return state;
        case types.todoAdd:
            return {
                ...state,
                todos: [action.payload, ...state?.todos]
            };
        case types.todoToggle:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload
                        ? { ...todo, active: !todo.active }
                        : todo)
            };
        case types.todoActive:
            return {
                ...state,
                activeTodo: [state?.todos.filter(todo => todo.active)]
            };
        default:
            return state;
    }
}