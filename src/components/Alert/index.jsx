import React, { Component } from 'react';
import { UncontrolledAlert } from 'reactstrap';
import { clearAlert } from '../../store/alert/action';
import './style.scss';

export default class Alert extends Component {
    timeout = null;
    componentDidMount() {
        this.timeout = setTimeout(() => {
            this.props.clearAlert();
        }, 6000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
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