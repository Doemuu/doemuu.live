import React from "react";
import ReactDOM from "react-dom";

import './tailwind.output.css';

import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";


import * as firebase from 'firebase';

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

var firebaseConfig = {
  apiKey: "AIzaSyA4evUBL9vQufI73UA4A8HykURtoY-vO4I",
  authDomain: "doemuulive-56e78.firebaseapp.com",
  databaseURL: "https://doemuulive-56e78.firebaseio.com",
  projectId: "doemuulive-56e78",
  storageBucket: "doemuulive-56e78.appspot.com",
  messagingSenderId: "534323793959",
  appId: "1:534323793959:web:3005474a56f603c20c7e02",
  measurementId: "G-4P3WK5GKEE",
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
