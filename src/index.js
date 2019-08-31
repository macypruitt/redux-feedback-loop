//modules
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import App from './components/App/App';
import allFeedbackReducer from './modules/reducers/allFeedbackReducer';


import './index.css';

const store = createStore(
    combineReducers({
        allFeedbackReducer
    }),
    applyMiddleware(logger)
)
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
