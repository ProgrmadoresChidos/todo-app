import React, { useReducer } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header';
import { AddNewTodo } from './components/AddNewTodo'
import { TodoContext } from './context/TodoContext';
import { todoReducer } from './reducer/todoReducer'
import { TodoList } from './components/TodoList';

export const TodoApp = () => {

    const initTodos = [
        {
            id: new Date().getDate(),
            desc: 'test',
            active: true
        }
    ]


    const [todos, dispatch] = useReducer(todoReducer, initTodos);

    return (
        <TodoContext.Provider value={{
            todos,
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
                                active
                        </div>
                        </Route>
                        <Route path="/completed">
                            <div>
                                completed
                        </div>
                        </Route>
                    </Switch>
                </section>
            </div>
        </TodoContext.Provider>
    )
}
