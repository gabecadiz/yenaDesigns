import React from 'react';
import Icon from './images/Icon.svg';
import './App.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import About from './About';
import Work from './Work';
import WorkProject from './WorkProject';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/work" exact component={Work} />
        <Route path="/work/:project" component={WorkProject} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
