import React, { Component } from 'react';
import './App.css';
import {Container} from 'reactstrap'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {reducer} from './redux/reducers'
import {Provider} from 'react-redux'
import {Route} from 'react-router-dom'
import logo from './img/tgc1.png'
import me from './img/me.png'
import bg from './img/bg.jpg'

import Header from './Header'
import Home from './comps/'
import Projects from './comps/projects/'
const store = createStore(reducer,applyMiddleware(thunk))




class App extends Component {
  
 




    componentDidMount(){
      document.querySelector('.App')
      .style=`
      background-image:url(${bg});
      background-position:center;
      background-size:cover;
      `


    }





  render() {

    return (
      <Provider store={store}>
      <div className="App">
      <Header logo={logo}/>
    	<Route exact path='/' render={()=>{

    		return(
      <Container>
        <Home imgz={[me]} />


      
      </Container>
    			)
    	}}/>

      <Route exact path='/projects' render={()=>{

        return (

          <Projects />

          )

      }} />
       </div>
      }
      </Provider>
    );
  }
}

export default App;
