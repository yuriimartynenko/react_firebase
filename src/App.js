import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { routes } from './routes/index';
import Alert from './components/Alert/index'
import configureStore from './configureStore';

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <Alert />
            <Router>
                {routes}
            </Router>
        </Provider>
    );
}

export default App;