import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({component: Component, isAuthenticated, isVerifying, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            isVerifying ? (
                ''
            ) : isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        isVerifying: state.auth.isVerifying
    };
}

export default connect(mapStateToProps)(ProtectedRoute);