import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { authReducer } from './auth/reducer';
import { registerReducer } from './register/reducer';
import { alertReducer } from './alert/reducer';
import { LOGOUT_SUCCESS } from './auth/actionTypes';

export default (state, action) => {
    if (action.type !== LOGOUT_SUCCESS) {
        return appReducer(state, action);
    }
};

const appReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    register: registerReducer,
    alert: alertReducer
});