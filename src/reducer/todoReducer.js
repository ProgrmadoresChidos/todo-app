import { types } from "../types/types";


export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case types.todoList:
            return state;
        case types.todoAdd:
            return [...state, action.payload];
        case types.todoCompleted:
            return {
                activeTodo: state.todos.filter(value => value.active === false),
                todos: state.todos,
            };
        default:
            return state;
    }
}