import { myFirebase, db } from '../../config/firebase';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    VERIFY_REQUEST,
    VERIFY_SUCCESS,
    USER_DATA_SUCCESS
} from './actionTypes';
import { showAlert } from '../alert/action';
import { history } from '../../history';

const requestLogin = () => {
    return {
        type: LOGIN_REQUEST
    };
};

const receiveLogin = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    };
};

const userData = (data) => {
    return {
        type: USER_DATA_SUCCESS,
        payload: data
    }
}

const loginError = () => {
    return {
        type: LOGIN_FAILURE
    };
};

const requestLogout = () => {
    return {
        type: LOGOUT_REQUEST
    };
};

const receiveLogout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};

const logoutError = () => {
    return {
        type: LOGOUT_FAILURE
    };
};

const verifyRequest = () => {
    return {
        type: VERIFY_REQUEST
    };
};

const verifySuccess = () => {
    return {
        type: VERIFY_SUCCESS
    };
};

export const loginUser = (user) => {
    return async (dispatch) => {
        try {
            dispatch(requestLogin());
            const { email, password } = user;
            const response = await myFirebase.auth().signInWithEmailAndPassword(email, password);
            dispatch(getUser(response.user.uid));
            if(response.user && response.user.emailVerified) {
                dispatch(receiveLogin(response.user));
            } else {
                throw new Error ('Будь ласка, підтвердіть свій email');
            }
        } catch (e) {
            dispatch(loginError());
            if(e.code === 'auth/wrong-password') {
                dispatch(showAlert('Неправильний email або пароль', 'danger'));
            } else {
                dispatch(showAlert(e.message, 'danger'));
            }
            console.error(e);
        }
    }
};

export const getUser = (uid) => {
    return async (dispatch) => {
        try {
            const user = await db.collection('users').doc(uid).get();
            dispatch(userData(user.data()));
        } catch (e) {
            dispatch(showAlert(e.message, 'danger'));
            console.error(e);
        }
    }
};

export const logoutUser = () => {
    return async (dispatch) => {
        try {
            dispatch(requestLogout());
            await myFirebase.auth().signOut();
            dispatch(receiveLogout());
            history.push('/login');
        } catch (e) {
            dispatch(logoutError());
            dispatch(showAlert(e.message, 'danger'));
            console.error(e);
        }
    }
};

export const verifyAuth = () => dispatch => {
    dispatch(verifyRequest());
    myFirebase.auth().onAuthStateChanged(user => {
        if (user && user.emailVerified) {
            dispatch(receiveLogin(user));
        }
        dispatch(verifySuccess());
    });
};