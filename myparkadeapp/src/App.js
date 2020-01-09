import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import User from './User';
import About from './About';
import Parkade from './Parkade';
import ParkadeDetail from './ParkadeDetail';
import ParkadeListAll from './ParkadeListAll';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";




class App extends Component {

  state = {
    id: '',
    name: '',
    description: '',
    email: '',
    isLoading: true,
    parkades: [],
    success: '',
    error: ''
  };

  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/user" component={User} />
            <Route path="/about" component={About} />
            <Route path="/parkade" exact component={Parkade} />
            <Route path="/parkade/listall" exact
              render={(props) => < ParkadeListAll {...props} />} />
            <Route path="/parkade/detail/:id" component={ParkadeDetail} />
            <Route path="/parkade/del/:id" component={ParkadeListAll} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
