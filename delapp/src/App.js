import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Signup from './components/Signup';

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
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/parkade/detail/:id" component={Home} />
          <Route path="/parkade/del/:id" component={Home} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
