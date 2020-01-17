import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../history';

export const ProtectedAdminRoute = ({component: Component, ...rest}) => {
    class ProtectedAdminRouteWithComponent extends React.Component {
        componentDidMount() {
            if (!this.props.isAdmin) {
                history.push('/');
            }
        }

        render() {
            return (
                <Component {...this.props} />
            );
        }
    }

    const mapStateToProps = (state) => ({
        isAuthenticated: state.auth.isAuthenticated,
        isAdmin: state.auth.newData.isAdmin,
    });

    const ProtectedAdminRouteComponent = connect(mapStateToProps, null)(ProtectedAdminRouteWithComponent);

    return <Route {...rest} component={ProtectedAdminRouteComponent}/>;
};