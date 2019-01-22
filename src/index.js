import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app';
import reducers from './reducers';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById("root");

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>, root
);