import React from 'react';
import ReactDOM from 'react-dom';
import Content1 from './Content1';
import Content2 from './Content2';
import {Route, Switch} from 'react-router-dom';

export default class Body extends React.Component {
    render() {
        return(
            <div>
                <Switch>
                <Route component={ Content1 } path="/" exact />
                <Route component={ Content2 } path="/Mac" />
                </Switch>
            </div>
        )
    }
}