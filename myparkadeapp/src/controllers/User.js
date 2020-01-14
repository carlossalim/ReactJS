import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function User() {
	const error = useSelector((state) => state.error);
	const errorlog = error.map((myerr, index) => {
		return <li key={index}> {myerr.msg} </li>;
	});
	console.log('errorlog', errorlog);
	return (
		<div>
			<h1>USER</h1>
			<ul>{errorlog}</ul>
		</div>
	);
}

export default User;
