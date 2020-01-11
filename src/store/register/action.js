import { myFirebase, db } from '../../config/firebase';
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './actionTypes';
import { showAlert } from '../alert/action';
import { history } from "../../history";

const requestSignup = () => {
    return {
        type: SIGNUP_REQUEST
    };
};

const receiveSignup = () => {
    return {
        type: SIGNUP_SUCCESS,
    };
};

const signupError = () => {
    return {
        type: SIGNUP_FAILURE
    };
};

export const signupUser = (data) => {
    return async (dispatch) => {
        try {
            dispatch(requestSignup());
            const { email, password, firstName, lastName } = data;
            const response = await myFirebase.auth().createUserWithEmailAndPassword(email, password);
            const user = response.user;
            if (user.uid) {
                const userData = {
                    firstName,
                    lastName,
                    uid: user.uid,
                    email: user.email,
                    isAdmin: false
                };
                await db.collection('users').doc(user.uid).set(userData);
                await user.sendEmailVerification();
                dispatch(receiveSignup());
                dispatch(showAlert('Ви успішно зареєструвалися. Будь ласка, підвердіть свій email.', 'success'));
                history.push('/login');
            }
        } catch (e) {
            dispatch(signupError());
            dispatch(showAlert('Такий користувач вже існує', 'danger'));
            console.error(e);
        }
    }
};