import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const placeholder = (state = { feedback: '', understanding: '', support: '', comments: '' }, action) => {
    if (action.type === "ADD_INPUT") {
        return action.payload
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        placeholder
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
