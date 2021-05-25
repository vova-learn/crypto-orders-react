import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './components/app/app';
import rootReducer from './store/root-reducer';

const root = document.getElementById(`root`);

const store = createStore(rootReducer);
window.s = store;

ReactDOM.render(
    <App />,
    root
);
