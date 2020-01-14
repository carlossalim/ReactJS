export const increment = () => {
	return { type: 'INCREMENT' };
};
export const decrement = () => {
	return { type: 'DECREMENT' };
};

export const addError = () => {
	return { type: 'ADD_ERROR' };
};
export const clearErrors = () => {
	return { type: 'CLEAR_ERRORS' };
};

export const dellastError = () => {
	return { type: 'DELETE_LAST_ERROR' };
};

export const delFirstError = () => {
	return { type: 'DELETE_FIRST_ERROR' };
};

export const fetchErrors = () => {
	return { type: 'FETCH_ERRORS' };
};
