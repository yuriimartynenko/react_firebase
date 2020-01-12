import React from 'react';
import * as actions from '../../store/alert/action';
import Alert from '../../components/Alert';
import { connect } from 'react-redux';

export const AlertContainer = ({
                                   message,
                                   color,
                                   clearAlert,
                               }) => !!message ? (
    <Alert clearAlert={clearAlert} message={message} color={color}/>
) : null;

const mapStateToProps = (state) => ({
    message: state.alert.message,
    color: state.alert.color,
});

export default connect(
    mapStateToProps,
    {clearAlert: actions.clearAlert},
)(AlertContainer);