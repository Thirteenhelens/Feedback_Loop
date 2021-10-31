import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
//Importing everything needed.

//Making reducer to store the inputs of each form.
const feedback = (state = [], action) => {
    //Adding the input payload send with each dispatch.
    if (action.type === "ADD_INPUT") {
        return [...state, action.payload]
    }
    return state;
}

//Making a store and keeping the reducer in it, so other components can reference it.
const storeInstance = createStore(
    combineReducers({
        feedback
    }), applyMiddleware(
        //Using logger to track state changes.
        logger
    )
);

ReactDOM.render(
    <Provider store={storeInstance} >
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
