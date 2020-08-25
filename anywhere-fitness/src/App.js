import React from 'react';
<<<<<<< HEAD
import './styles.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Nav from './components/Nav'
import Form from './components/Form';
import Login from './components/Login'

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Route exact path='/' component={Login} />
        <Route path='/Form' component={Form} />
      </div>
    </Router>
  );
}
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> e76de3793c05f6281a3a0311351cf57aab7c3123
