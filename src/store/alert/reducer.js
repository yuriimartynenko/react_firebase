import { SHOW_ALERT, CLEAR_ALERT } from './actionTypes';

export const initialState = {message: '', color: ''};

export const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return {
                ...state,
                message: action.message,
                color: action.color,
            };
        case CLEAR_ALERT:
            return {...initialState};
        default:
            return state;
    }
};