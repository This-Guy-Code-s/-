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
  


	


  global.document.createRange = () => ({
    setStart: () => {},
    setEnd: () => {},
    commonAncestorContainer: {
      nodeName: 'BODY',
      ownerDocument: document,
    },
  });
const props = {
    me:me,
    wavio:wavio,
    logo:logo
  }

// beforeEach(() => {
//   container = document.createElement('div');
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   document.body.removeChild(container);
//   container = null;
// });

test('renders without crashing', () => {
  const div = document.createElement('div');
 const {screen,getByTestId,container} = render(<Provider store={store}><App {...props}/></Provider>);
  
});
