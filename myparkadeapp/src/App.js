import React, { Component } from 'react';
import './App.css';
import Navbar from './controllers/Navbar';
import Home from './controllers/Home';
import User from './controllers/User';
import About from './controllers/About';
import Parkade from './controllers/Parkade';
import ParkadeDetail from './controllers/ParkadeDetail';
import ParkadeListAll from './controllers/ParkadeListAll';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addError } from './actions';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	useParams
} from 'react-router-dom';

function App() {
	const counter = useSelector((state) => state.counter);
	const isLogged = useSelector((state) => state.isLogged);
	const error = useSelector((state) => state.error);
	const dispatch = useDispatch();

	// state = {
	// 	id: '',
	// 	name: '',
	// 	description: '',
	// 	email: '',
	// 	isLoading: true,
	// 	parkades: [],
	// 	success: '',
	// 	error: ''
	// };

	return (
		<Router>
			<div className="container">
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/user" component={User} />
					<Route path="/about" component={About} />
					<Route path="/parkade" exact component={Parkade} />
					<Route
						path="/parkade/listall"
						exact
						render={(props) => <ParkadeListAll {...props} />}
					/>
					<Route
						path="/parkade/detail/:id"
						component={ParkadeDetail}
					/>
					<Route path="/parkade/del/:id" component={ParkadeListAll} />

				</Switch>
			</div>
		</Router>
	);
}
export default App;
