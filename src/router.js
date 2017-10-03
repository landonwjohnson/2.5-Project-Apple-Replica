import React from "react";
import {Switch, Route } from "react-router-dom";

import Content1 from './components/Content1';
import Content2 from './components/Content2';

export default (
    <Switch>
        <Route component={ Content2 } path="/Mac" />
        <Route component={ Content1 } path="/" />
    </Switch>
)