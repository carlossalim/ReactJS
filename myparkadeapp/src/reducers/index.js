import parkade from './parkade';
import isLogged from './isLogged';
import error from './error';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
	parkade,
	isLogged,
	error
});

export default allReducers;
