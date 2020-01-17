import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../store/auth/action';
import { Container, Row, Col } from 'reactstrap';
import { ProtectedDashboardRoute } from '../../routes/ProtectedDashboardRoute';
import Sidebar from '../Sidebar';
import NavBarMenu from '../Navbar';

class Home extends Component {
    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
    };

    render() {
        const { isLoggingOut } = this.props;
        return (
            <Container>
                <div>
                    <NavBarMenu handleLogout={this.handleLogout} isLoggingOut={isLoggingOut} />
                </div>
                <Row className='profile'>
                    <Col md='4' lg='3' className='mt-3'>
                        <Sidebar />
                    </Col>
                    <Col md='8' lg='9' className='mt-3'>
                        <div className='edit-content pl-4'>
                            {ProtectedDashboardRoute}
                        </div>
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