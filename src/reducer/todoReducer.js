import { types } from "../types/types";


export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case types.todoList:
            return state;
        case types.todoAdd:
            return [...state, action.payload];
        default:
            return state;
    }
}