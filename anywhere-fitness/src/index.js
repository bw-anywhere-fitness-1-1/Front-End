import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD

import App from './App';

const rootElement = document.getElementById('root');
=======
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

>>>>>>> e76de3793c05f6281a3a0311351cf57aab7c3123
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
<<<<<<< HEAD
  rootElement
);
=======
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
>>>>>>> e76de3793c05f6281a3a0311351cf57aab7c3123
