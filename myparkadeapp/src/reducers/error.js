const error = (state = [], action) => {
	console.log('state', state);
	let output = [];
	switch (action.type) {
		case 'ADD_ERROR':
			return [
				// Copy of actual state
				...state,
				{ msg: action.msg }
			];
		case 'CLEAR_ERRORS':
			return [];
		case 'DELETE_LAST_ERROR': {
			if (state.length > 0) {
				state.length = state.length - 1;
			}
			return state;
		}
		case 'DELETE_FIRST_ERROR': {
			state.shift();
			return state;
		}
		case 'FETCH_ERRORS': {
			console.log('fetching...');
			return state;
		}
		default:
			return state;
	}
};
export default error;
