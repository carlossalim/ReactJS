//REDUX Create Store and Apply Middleware
import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from './reducers';
import thunk from 'redux-thunk';

const middleware = [ thunk ];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	allReducers,
	composeEnhancer(applyMiddleware(...middleware))
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
