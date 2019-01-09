import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from "react-router-dom";
import history from './history';
import Login from './Components/Login';
import Todo from './Components/Todo';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import todoApp from './Reducers/index';

const store = createStore(todoApp);
class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <div>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/Todo" component={Todo} />
                    </div>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
