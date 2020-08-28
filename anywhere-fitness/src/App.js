import React from 'react';
import './styles.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Nav from './components/Nav'
import Form from './components/Form';
import Login from './components/Login'
import IDashboard from './components/instructor-dashboard'
import CDashboard from './components/client-dashboard'
import EditClass from './components/edit-class'

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
          <Route path='/edit-class/:id' component={EditClass} />
         
        </Switch>
      </div>
    </Router>
  );
}