import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const feedback = (state = { feeling: '', understanding: '', support: '', comment: '' }, action) => {
    // switch (action.type) {
    //     case "ADD_FEELING":
    //         return feedback.feeling = action.payload
    //         // (state => state.feedback = action.payload)
    // }
    // 
    // pizza => pizza.name != action.payload.name)
    // { feedback: '', understanding: '', support: '', comments: '' }
    // 
    // if (action.type === "ADD_INPUT") {
    //     return action.payload
    // }
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
