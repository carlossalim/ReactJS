import React from 'react';
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


function App() {

  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user" component={User} />
          <Route path="/about" component={About} />
          <Route path="/parkade" exact component={Parkade} />
          <Route path="/parkade/listall" exact component={ParkadeListAll} />
          <Route path="/parkade/detail/:id" component={ParkadeDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
