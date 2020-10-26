import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD49v6KUIUSAaeGbk6lK191TffhfyPjjwg",
  authDomain: "india-zapper.firebaseapp.com",
  databaseURL: "https://india-zapper.firebaseio.com",
  projectId: "india-zapper",
  storageBucket: "india-zapper.appspot.com",
  messagingSenderId: "408688004226",
  appId: "1:408688004226:web:42876614eceb46b901789b",
  measurementId: "G-4K7SB4CYR3"
};

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
