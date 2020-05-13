import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import env from 'dotenv'
env.config()


ReactDOM.render(
	<Router>
  <App />
</Router>
  ,
  document.getElementById('root')
);
