import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../store/auth/action';
import { Container, Row, Col, Button } from 'reactstrap';

class Home extends Component {
    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
    };

    render() {
        const { isLoggingOut, logoutError } = this.props;
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Ласкаво просимо</h1>
                        <Button onClick={this.handleLogout} color='danger'>{isLoggingOut ? 'Зачекайте..' : 'Вийти'}</Button>
                        {logoutError && <p>Error logging out</p>}
                    </Col>
                </Row>
            </Container>
        );
    }
}
function mapStateToProps(state) {
    return {
        isLoggingOut: state.auth.isLoggingOut,
        logoutError: state.auth.logoutError
    };
}
export default connect(mapStateToProps)(Home);