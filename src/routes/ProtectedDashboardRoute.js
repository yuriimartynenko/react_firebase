import React from 'react';
import { Switch } from 'react-router-dom';
import { Welcome, Content1, Content2, Content3, Content4, Content5, Content6 } from '../components/FakerData';
import { ProtectedAdminRoute } from './ProtectedAdminRoute';
import ProtectedRoute from './ProtectedRoute';

export const ProtectedDashboardRoute = (
    <Switch>
        <ProtectedRoute exact path='/' component={Welcome} />
        <ProtectedRoute exact path='/dashboard' component={Content1} />
        <ProtectedRoute exact path='/dashboard/link1' component={Content1} />
        <ProtectedRoute exact path='/dashboard/link2' component={Content2} />
        <ProtectedRoute exact path='/dashboard/link3' component={Content3} />
        <ProtectedRoute exact path='/dashboard/link4' component={Content4} />
        <ProtectedAdminRoute exact path='/dashboard/link5' component={Content5} />
        <ProtectedAdminRoute exact path='/dashboard/link6' component={Content6} />
    </Switch>
);