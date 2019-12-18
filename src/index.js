import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/stable';
// import 'react-app-polyfill/ie11'; // For IE 11 support
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware,compose } from 'redux';
import * as serviceWorker from './serviceWorker';
import userReducer from './store/reducers/userReducer';
const rootReducer = combineReducers({
    ur: userReducer
})

const logger = store => {
	return next =>{
        return action =>{
            console.log('[Middleware] Dispatching', action);
            const result =  next(action);
            console.log('[Middleware] Dispatching', store.getState())
            return result;
        }
    }
}
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));


const app = (
	<Provider store={store}>
	        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
