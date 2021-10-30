import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const feedback = (state = [], action) => {
    switch (action.type) {
        case "ADD_FEELING":
            return [...state, action.payload]

        case "ADD_UNDERSTANDING":
            return [...state, action.payload]

        case "ADD_SUPPORT":
            return [...state, action.payload]

        case "ADD_COMMENT":
            return [...state, action.payload]
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feedback
    }), applyMiddleware(
        logger
    )
)

ReactDOM.render(
    <Provider store={storeInstance} >
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
