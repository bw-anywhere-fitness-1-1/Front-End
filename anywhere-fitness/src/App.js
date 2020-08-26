import React from 'react';

import './styles.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Nav from './components/Nav'
import Form from './components/Form';
import Login from './components/Login'
import CreateClass from './components/create-class'


export default function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Route exact path='/' component={Login} />
        <Route path='/Form' component={Form} />
        <Route path='/create-class' component={CreateClass} />
      </div>
    </Router>
  );
}