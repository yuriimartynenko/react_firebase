import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { authReducer } from './auth/reducer';
import { registerReducer } from './register/reducer';
import { alertReducer } from './alert/reducer';
import { forgotPasswordReducer } from './passwordReset/reducer';

const appReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    register: registerReducer,
    passwordReset: forgotPasswordReducer,
    alert: alertReducer
});

export default appReducer;