import React from 'react';
import ReactDOM from 'react-dom';
import Content1 from './content/Content1';
import Content2 from './content/Content2';
import Content4 from './content/Content4';
import Content7 from './content/Content7';
import {Route, Switch} from 'react-router-dom';

export default class Body extends React.Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route component={ Content2 } path="/Mac" />
                    <Route component={ Content4 } path="/iPhone"/>
                    <Route component={ Content7 } path="/Music" />
                    <Route component={ Content1 } path="/" />
                </Switch>
            </div>
        )
    }
}