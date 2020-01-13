import { myFirebase } from '../../config/firebase';
import { FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE } from './actionTypes';
import { showAlert } from '../alert/action';
import { history } from "../../history";

const requestForgotPassword = () => {
    return {
        type: FORGOT_PASSWORD_REQUEST
    };
};

const receiveForgotPassword = () => {
    return {
        type: FORGOT_PASSWORD_SUCCESS,
    };
};

const forgotPasswordError = () => {
    return {
        type: FORGOT_PASSWORD_FAILURE
    };
};

export const passwordReset = (user) => {
    return async (dispatch) => {
        try {
            dispatch(requestForgotPassword());
            await myFirebase.auth().sendPasswordResetEmail(user.email);
            dispatch(receiveForgotPassword());
            history.push('/login');
            dispatch(showAlert('Лист із відновленням був надісланий на ваш email', 'success'));
        } catch (e) {
            dispatch(forgotPasswordError());
            dispatch(showAlert('Такого користувача не існує', 'danger'));
            console.error(e.message);
        }
    }
};