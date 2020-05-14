import React, { Component } from 'react';
import './App.css';
import {Container} from 'reactstrap'
import {Route} from 'react-router-dom'

import logo from './img/tgc1.png'
import me from './img/me.png'
import bg from './img/bg6.jpg'
import mbg from './img/bg6mobile.jpg'

import Header from './Header'
import Home from './comps/'
import Projects from './comps/projects/'

import {connect} from 'react-redux'
import {getMyWork} from './redux/actions'
   

class App extends Component {

    componentDidMount(){
     
this.props.getMyWork()


        if(window.innerWidth===500){

             document.querySelector('.App')
            .style=`
      background-image:url(${bg});
      background-position:center;
      -moz-background-size:cover;
      -webkit-background-size:cover;
      background-size:cover;
    

     `
        }else{ 

       document.querySelector('.App')
      .style=`
      background-image:url(${mbg});
      background-position:center;
      -moz-background-size:cover;
      -webkit-background-size:cover;
      background-size:cover;
    

     `
  
        }
    

 
    }



  render() {



    return (
      <div className="App">
      <Header logo={logo} me={[me]}/>
    	<Route exact path='/-/' render={()=>{

    		return(
      <Container>
        <Home />


      
      </Container>
    			)
    	}}/>

      <Route exact path='/-/Projects' render={()=>{

        return (

          <Projects />

          )

      }} />
       </div>
     
    );
  }
}



const mapStateToProps = state =>{
return {
...state
}
}


export default connect(
mapStateToProps,
{getMyWork}
)(App)
