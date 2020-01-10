import { SHOW_ALERT, CLEAR_ALERT } from './actionTypes';

export const showAlert = (message, color) => ({
    type: SHOW_ALERT,
    message,
    color,
});

export const clearAlert = () => ({
    type: CLEAR_ALERT,
});