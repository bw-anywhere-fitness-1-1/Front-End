import React from 'react';

import './styles.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Nav from './components/Nav'
import Form from './components/Form';
import Login from './components/Login'
<<<<<<< HEAD
import CreateClass from './components/create-class'
// import IDashboard from './components/instructor-dashboard'
=======
>>>>>>> 80d727035e9f1254f8a4098422a3ede45a7fa212

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Route exact path='/' component={Login} />
        <Route path='/Form' component={Form} />
<<<<<<< HEAD
        <Route path='/create-class' component={CreateClass} />
=======
>>>>>>> 80d727035e9f1254f8a4098422a3ede45a7fa212
      </div>
    </Router>
  );
}