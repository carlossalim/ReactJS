import React from 'react';
import App from '../App';
import { useSelector, useDispatch } from 'react-redux';

function About() {
	const dispatch = useDispatch();
	const mycount = useSelector((state) => state.error);
	console.log('mycount', mycount);

	return (
		<div>
			<h1>About</h1>

			<hr />
			<button
				type="submit"
				onClick={(e) =>
					dispatch({
						type: 'ADD_ERROR',
						msg: mycount.length
					})}
			>
				Add Error
			</button>
			<button
				type="submit"
				onClick={(e) =>
					dispatch({
						type: 'CLEAR_ERRORS'
					})}
			>
				CLEAR Error
			</button>
			<button
				type="submit"
				onClick={(e) =>
					dispatch({
						type: 'DELETE_FIRST_ERROR'
					})}
			>
				DELETE FIRST ERROR
			</button>
			<button
				type="submit"
				onClick={(e) =>
					dispatch({
						type: 'DELETE_LAST_ERROR'
					})}
			>
				DELETE LAST Error
			</button>
		</div>
	);
}

export default About;
