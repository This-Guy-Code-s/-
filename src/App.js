import React from 'react';
import './App.css';
import {Container} from 'reactstrap'

import styled from 'styled-components'

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

import {Div} from './util/cloudWaveAnimation'


let APP_COMP = styled.div`

  `





class App extends React.Component{
      constructor(props){
        super(props)
        this.state={
          mode:false,
         
        }

        this.DarkMode=this.DarkMode.bind(this)
      }

 DarkMode = () =>{
     if(this.state.mode){
              APP_COMP = styled.div`
flex:1;
-webkit-text-align: center;
text-align: center;
background-color:#0C0032;
overflow-x:hidden;
overflow-y:auto;
background-image:url(${window.innerWidth<=500?bg:mbg});
background-position:center;
-moz-background-size:cover;
-webkit-background-size:cover;
background-size:cover;

  `
  this.setState({mode:!this.state.mode})
        }else{ 
          APP_COMP = styled.div`
flex:1;
-webkit-text-align: center;
text-align: center;
background-color:#0C0032;
overflow-x:hidden;
overflow-y:auto;
background-image:url('');
background-position:center;
-moz-background-size:cover;
-webkit-background-size:cover;
background-size:cover;

  `
   this.setState({mode:!this.state.mode})
}  
 

        }


componentDidMount(){
        APP_COMP = styled.div`
flex:1;
-webkit-text-align: center;
text-align: center;
background-color:#0C0032;
overflow-x:hidden;
overflow-y:auto;
background-image:url(${window.innerWidth<=500?bg:mbg});
background-position:center;
-moz-background-size:cover;
-webkit-background-size:cover;
background-size:cover;

  `
    this.props.getMyWork() 

    }


    render(){ 
    return (
      <APP_COMP className="App lightMode">

      <Header logo={logo} me={[me]} mode={this.state.mode} DarkMode={()=>this.DarkMode()} compRendered={this.props.compRendered}/>
      <Container>

      {
        this.props.compRendered==='Home'?<Home />:<Projects />
      }
    
      </Container>

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
      
       </APP_COMP>

       
     
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
















