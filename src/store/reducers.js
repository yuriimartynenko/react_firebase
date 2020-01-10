import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { authReducer } from './auth/reducer';
import { registerReducer } from './register/reducer';
import { alertReducer } from './alert/reducer';

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    register: registerReducer,
    alert: alertReducer
});