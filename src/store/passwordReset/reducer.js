import { FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE } from './actionTypes';

export const defaultState = {
    isPasswordReset: false,
    passwordResetError: false,
};

export const forgotPasswordReducer = (
    state = defaultState,
    action
) => {
    switch (action.type) {
        case FORGOT_PASSWORD_REQUEST:
            return {
                ...state,
                isPasswordReset: true,
                passwordResetError: false
            };
        case FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                isPasswordReset: false,
            };
        case FORGOT_PASSWORD_FAILURE:
            return {
                ...state,
                isPasswordReset: false,
                passwordResetError: true
            };
        default:
            return state;
    }
};