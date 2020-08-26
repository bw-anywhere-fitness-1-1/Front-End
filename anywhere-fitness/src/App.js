import React from 'react';
import './styles.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Nav from './components/Nav'
import Form from './components/Form';
import Login from './components/Login'
import IDashboard from './components/instructor-dashboard'
import CDashboard from './components/client-dashboard'

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/Form' component={Form} />
          <Route path='/instructor-dashboard' component={IDashboard} />
          <Route path='/client-dashboard' component={CDashboard} />
        </Switch>
      </div>
    </Router>
  );
}