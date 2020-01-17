import React from 'react';
import { Provider } from 'react-redux';
import { routes } from './routes';
import AlertContainer from './containers/AlertContainer';
import configureStore from './configureStore';

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <AlertContainer />
            {routes}
        </Provider>
    );
}

export default App;