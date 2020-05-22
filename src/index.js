import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Spinner} from 'reactstrap'

import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {reducer} from './redux/reducers'
import {Provider} from 'react-redux'

import env from 'dotenv'
env.config()

const store = createStore(reducer,applyMiddleware(thunk))




ReactDOM.render(
<Spinner style={{ width: '3rem', height: '3rem' }} size="lg" color="info" />
  ,
  document.querySelector('.preloader')
);
ReactDOM.render(
      <Provider store={store}>

	<Router>
  <App />
</Router>
      </Provider>

  ,
  document.getElementById('root')
);
const preloader = document && document.querySelector('.preloader');

const fadeAway = setInterval(() => {
 
  if (!preloader.style.opacity) {
    preloader.style.opacity = 1;
  }
  if (preloader.style.opacity > 0) {
    preloader.style.opacity -= 0.1;
    console.log('done',preloader.style.opacity,preloader.style.zIndex)
    	if(preloader.style.opacity<=0){
    		preloader.style.zIndex='-221';
    		preloader.remove()
    	}
  } else {
    clearInterval(fadeAway);
  }
}, 100);
