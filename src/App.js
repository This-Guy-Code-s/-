import React from 'react';
import './App.css';
import {Container} from 'reactstrap'

import logo from './img/tgc1.png'
import me from './img/me.png'
import wavio from './img/wave.png'

import Header from './Header'
import Home from './comps/'
import Projects from './comps/projects/'

import {connect} from 'react-redux'
import {getMyWork,APP_COMP,DarkMode} from './redux/actions'

import {Div} from './util/cloudWaveAnimation'


// let APP_COMP = styled.div`

//   `
 




class App extends React.Component{
componentWillMount(){
  console.log('mode in app.js willMount()',this.props.mode)

    this.props.getMyWork() 

    }


    render(){ 
    return (
      <APP_COMP className="App lightMode">

      <Header logo={logo} me={[me]} compRendered={this.props.compRendered}/>
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
{getMyWork,DarkMode}
)(App)
















