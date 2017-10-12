import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes' 
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
  import { BrowserRouter } from 'react-router-dom'

ReactDOM.render
(
<Router>
    <App/>
</Router>, document.getElementById('root'));
registerServiceWorker();
