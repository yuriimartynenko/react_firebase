import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './store/reducers';
import thunkMiddleware from 'redux-thunk';
import { verifyAuth } from './store/auth/action';

export default function configureStore(persistedState) {
    const store = createStore(
        rootReducer,
        persistedState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
    store.dispatch(verifyAuth());
    return store;
}