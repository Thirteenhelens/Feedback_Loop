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
    //When the form is restarted, the current feedback state is emptied.
    switch(action.type) {
        case "ADD_INPUT":
            return [...state, action.payload];
        case "CLEAR":
            return [];
        default:
            return state;
    }
}

// Making a reducer that receives all previous reviews. 
const pastFeedback = (state = [], action) => {
    switch (action.type) {
        case 'FEEDBACK':
            return [...state, action.payload];
        default:
            return state;
    }
}

//Making a store and keeping the reducer in it, so other components can reference it.
const storeInstance = createStore(
    combineReducers({
        feedback,
        pastFeedback
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
