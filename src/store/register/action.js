import { myFirebase, db } from '../../config/firebase';
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './actionTypes';
import { showAlert } from '../alert/action';

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

export const signupUser = (user) => {
    return async (dispatch) => {
        try {
            dispatch(requestSignup());
            const { email, password, firstName, lastName } = user;
            const response = await myFirebase.auth().createUserWithEmailAndPassword(email, password);
            if (response.user.uid) {
                const user = {
                    firstName,
                    lastName,
                    uid: response.user.uid,
                    email: response.user.email,
                    isAdmin: false
                };
                await db.collection('users').doc(response.user.uid).set(user);
                dispatch(receiveSignup());
                dispatch(showAlert('Ви успішно зареєструвалися', 'success'));
            }
        } catch (e) {
            dispatch(signupError());
            dispatch(showAlert('Такий користувач вже існує', 'danger'));
            console.error(e);
        }
    }
};