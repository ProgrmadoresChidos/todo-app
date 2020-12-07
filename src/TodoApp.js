import React, { useEffect, useReducer } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header';
import { AddNewTodo } from './components/AddNewTodo'
import { TodoContext } from './context/TodoContext';
import { todoReducer } from './reducer/todoReducer'
import { TodoList } from './components/TodoList';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || {
        activeTodo: null,
        todos: []
    };
}

export const TodoApp = () => {

    /* 
        active property
         true: todo is not finished,
         false: todo is finished
    */

    // const initTodos = {
    //     activeTodo: {},
    //     todos: [
    //         {
    //             id: 1,
    //             desc: 'test',
    //             active: true
    //         },
    //         {
    //             id: 2,
    //             desc: 'El nito',
    //             active: false
    //         },
    //         {
    //             id: 3,
    //             desc: 'Reto 1',
    //             active: true
    //         }
    //     ]
    // };

    const [todosItems, dispatch] = useReducer(todoReducer, null, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todosItems));
    }, [todosItems]);

    return (
        <TodoContext.Provider value={{
            todosItems,
            dispatch
        }}>
            <div className="todoApp">
                <Header />
                <section className="content">
                    <Switch>
                        <Route path="/" exact>
                            <Redirect to="/all" />
                        </Route>
                        <Route path="/all">
                            <div>
                                <AddNewTodo />
                                <TodoList />
                            </div>
                        </Route>
                        <Route path="/active">
                            <div>
                                <AddNewTodo />
                                <TodoList />
                            </div>
                        </Route>
                        <Route path="/completed">
                            <TodoList completed />
                        </Route>
                    </Switch>
                </section>
            </div>
        </TodoContext.Provider>
    )
}
