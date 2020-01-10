import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './actionTypes';

export const defaultState = {
    isSignupIn: false,
    signupError: false,
};

export const registerReducer = (
    state = defaultState,
    action
) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return {
                ...state,
                isSignupIn: true,
                signupError: false
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isSignupIn: false,
            };
        case SIGNUP_FAILURE:
            return {
                ...state,
                isSignupIn: false,
                signupError: true
            };
        default:
            return state;
    }
};