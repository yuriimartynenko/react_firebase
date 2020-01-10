import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Home from '../components/Main';
import { history } from '../history';
import Login from './../components/Login';
import Register from '../components/Register';

export const routes = (
    <Router history={history}>
        <Switch>
            <ProtectedRoute
                exact
                path="/"
                component={Home}
            />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Switch>
    </Router>
);