import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import RootReducer from "./store/reducers";
import { BrowserRouter } from 'react-router-dom'

const store = createStore(RootReducer, applyMiddleware(thunk));

ReactDOM.render(
 <BrowserRouter>
    <Provider store={store}>
      
        <App />
      
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

