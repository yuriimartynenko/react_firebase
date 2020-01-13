import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { routes } from './routes';
import AlertContainer from './containers/AlertContainer';
import configureStore from './configureStore';

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <AlertContainer />
            <Router>
                {routes}
            </Router>
        </Provider>
    );
}

export default App;