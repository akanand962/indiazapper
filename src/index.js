import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional


ReactDOM.render(

    <App />
 ,
  document.getElementById('root')
);


serviceWorker.unregister();
