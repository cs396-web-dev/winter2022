import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {getAccessTokenCookie, setAccessTokenCookie} from './utils';

function renderApp() {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}

// this initializes the app after the access token is set.
if (getAccessTokenCookie()) {
    // this executes if the app is run within flask:
    renderApp();
} else {
    // this executes if the app is run via npm start
    setAccessTokenCookie('webdev', 'password', renderApp);
}