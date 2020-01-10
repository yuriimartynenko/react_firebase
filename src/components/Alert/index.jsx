import React, { Component } from 'react';
import { UncontrolledAlert } from 'reactstrap';
import { clearAlert } from '../../store/alert/action';
import * as action from '../../store/alert/action';
import { connect } from 'react-redux';
import './style.scss';

class Alert extends Component {
    constructor(props){
        super(props);
        this.timeout = null;
    }
    timeout = null;
    componentDidMount() {
        this.timeout = setInterval(() => {
            this.props.clearAlert();
        }, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.timeout);
        this.timeout = 0;
    }

    render() {
        const { message, color } = this.props;
        return message && (
            <UncontrolledAlert
                color={color}
                className='position-fixed'
                onClick={() => {
                    clearAlert();
                }}>{message}
            </UncontrolledAlert>
        );
    }
}

const mapStateToProps = (state) => ({
    message: state.alert.message,
    color: state.alert.color,
});

export default connect(
    mapStateToProps,
    {clearAlert: action.clearAlert},
)(Alert);