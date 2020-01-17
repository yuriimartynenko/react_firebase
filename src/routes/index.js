import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Home from '../components/Main';
import { history } from '../history';
import Login from './../components/Login';
import Register from '../components/Register';
import PasswordReset from '../components/PasswordReset'

export const routes = (
    <Router history={history}>
        <Switch>
            <ProtectedRoute
                path='/'
                component={Home}
                exact
            />
            <ProtectedRoute
                path='/dashboard'
                component={Home}
            />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/password-reset' component={PasswordReset} />
        </Switch>
    </Router>
);