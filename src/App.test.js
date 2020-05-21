import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import logo from './img/tgc1.png'
import me from './img/me.png'
import wavio from './img/wave.png'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'

import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {reducer} from './redux/reducers'
import {Provider} from 'react-redux'


const store = createStore(reducer,applyMiddleware(thunk))


it('renders without crashing', () => {
  const div = document.createElement('div');
  // ReactDOM.render(<Provider store={store}><App /></Provider>, div);
});
