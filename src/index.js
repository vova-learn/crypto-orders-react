import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createAPI} from './api/api';
import rootReducer from './store/root-reducer';
import App from './components/app/app';
import {BrowserRouter} from 'react-router-dom';

const api = createAPI();
const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument(api)));

const root = document.getElementById(`root`);
ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    ,
    root
);

window.log = (text) => {
  return console.log(text); // eslint-disable-line no-console
};

window.s = store;
