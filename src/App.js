import React, { Component } from 'react';
import './App.css';
import {Container} from 'reactstrap'
import {Route} from 'react-router-dom'

import logo from './img/tgc1.png'
import me from './img/me.png'
import bg from './img/bg6.jpg'
import mbg from './img/bg6mobile.jpg'
import wavio from './img/wave.png'

import Header from './Header'
import Home from './comps/'
import Projects from './comps/projects/'

import {connect} from 'react-redux'
import {getMyWork} from './redux/actions'

import styled from 'styled-components'





const Div = styled.div`
 flex:1;
    -webkit-width:100%;
    -webkit-height:30%;
     width:100%;
    height:30%;
    opacity:70%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    z-index:0;

.waveWrapperInner {
    position: absolute;
    -webkit-width: 100%;
    -webkit-height: 10%;
     width: 100%;
    height: 10%;
    bottom: -1px;
    z-index:0;
}
.wave {
  flex:1;
    -webkit-width: 200%;
    -webkit-height: 100%;
     width: 200%;
    height: 100%;
    background-repeat: repeat no-repeat;
    -webkit-background-position: 0 bottom;
    background-position: 0 bottom;
    transform-origin: center bottom;
    z-index:-1;
}

.waveTop {
    -webkit-background-size: 25% 100px;
    background-size: 25% 100px;
  animation: move-wave 3s;
   -webkit-animation: move-wave 3s;
   -webkit-animation-delay: 1s;
   animation-delay: 1s;
}

.waveMiddle {
    -webkit-background-size: 25% 120px;
    background-size: 25% 120px;
    -webkit-animation: move_wave 10s linear infinite;
    animation: move_wave 10s linear infinite;
}

.waveBottom {
      -webkit-background-size: 25% 100px;
    background-size: 25% 100px;
    -webkit-animation: move_wave 15s linear infinite;
    animation: move_wave 15s linear infinite;

}




@-webkit-keyframes move_wave {
    0% {
        transform: translateX(0) translateZ(0) scaleY(1);
        -webkit-transform: translateX(0) translateZ(0) scaleY(1)
    }
    50% {
        transform: translateX(-25%) translateZ(0) scaleY(0.55);
        -webkit-transform: translateX(-25%) translateZ(0) scaleY(0.55)
    }
    100% {
        transform: translateX(-50%) translateZ(0) scaleY(1);
        -webkit-transform: translateX(-50%) translateZ(0) scaleY(1)
    }
}

@keyframes move_wave {
    0% {
        transform: translateX(0) translateZ(0) scaleY(1);
        -webkit-transform: translateX(0) translateZ(0) scaleY(1)
    }
    50% {
        transform: translateX(-25%) translateZ(0) scaleY(0.55);
        -webkit-transform: translateX(-25%) translateZ(0) scaleY(0.55)
    }
    100% {
        transform: translateX(-50%) translateZ(0) scaleY(1);
        -webkit-transform: translateX(-50%) translateZ(0) scaleY(1)
    }
}




/*mobile standing up*/
@media (max-width:500px){
.waveWrapperInner {
    -webkit-width: 150%;
    -webkit-height: 20%;
    width: 150%;
    height: 25%;
}
 
 
.waveWrapper {
    -webkit-height:40%;
    height:40%;

}
}



/*mobile tilting to the side*/
@media (max-width:900px) and (max-height:500px) and (min-width:500px){
.waveWrapperInner {
    -webkit-height: 40%;
    height: 40%;
}


.waveWrapper {
    -webkit-height:70%;
    height:70%;

}
}


/*pad standing up*/
@media screen and (max-width:1380px) and (max-height:1380px)
 and (min-width:700px) and (min-height:1000px){
.waveWrapperInner {
    -webkit-height: 20%;
    height: 20%;
}

 }




/*pad tilting to the side*/
@media screen and (max-width:1380px) and (max-height:1200px)
 and (min-width:1380px) and (min-height:700px){
.waveWrapperInner {
    height: 15%;
}
 }


`

class App extends Component {

    componentDidMount(){
     
this.props.getMyWork()


        if(window.innerWidth<=500){

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

       <Div className="waveWrapper waveAnimation">
  <div className="waveWrapperInner bgTop">
    <div className="wave waveTop" style={{backgroundImage:`url(${wavio})`}}></div>
  </div>
  <div className="waveWrapperInner bgMiddle">
    <div className="wave waveMiddle" style={{backgroundImage:`url(${wavio})`}}></div>
  </div>
  <div className="waveWrapperInner bgBottom">
    <div className="wave waveBottom" style={{backgroundImage:`url(${wavio})`}}></div>
  </div>
</Div>
      
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
















