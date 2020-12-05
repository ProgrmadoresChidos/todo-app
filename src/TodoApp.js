import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';

export const TodoApp = () => {
    return (
        <div className="todoApp">
            <Header />
            <section className="content">
                <Switch>
                    <Route path="/all">
                        <div>
                            all
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
    )
}
