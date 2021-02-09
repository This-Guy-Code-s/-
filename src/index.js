import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom'

import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {reducer} from './redux/reducers'
import {Provider} from 'react-redux'

import env from 'dotenv'
env.config()

const store = createStore(reducer,applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
<Router>
<App />
</Router>
</Provider>
,
document.getElementById('root')
);
