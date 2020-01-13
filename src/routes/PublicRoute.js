/*import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";

const PublicRoute = ({ component: Component, isAuthenticated, ...rest }) => {
    const routeComponent = (props) => (
        props.isAuthenticated
            ? <Redirect to={{ pathname: '/login' }} />
            : <Component {...props} />
    );
    return <Route {...rest} render={routeComponent} />;
};

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        isVerifying: state.auth.isVerifying
    };
}

export default connect(mapStateToProps)(PublicRoute);*/