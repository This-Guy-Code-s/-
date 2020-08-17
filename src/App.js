import React from 'react';
import {Container} from 'reactstrap'

import Header from './Header'
import Home from './comps/'
import Projects from './comps/projects/'

import {connect} from 'react-redux'
import {getMyWork} from './redux/actions'

import {Div} from './util/cloudWaveAnimation'

import bg from './img/bg6.jpg'
import bgdm from './img/bg6dm.jpg'
import styled from 'styled-components'





let AppContainer = styled.div`
flex:1;
-webkit-text-align: center;
text-align: center;
background-color:#0C0032;
overflow-x:hidden;
overflow-y:auto;
background-repeat:no-repeat;
background-position:top;
-moz-background-size:cover;
-webkit-background-size:cover;
background-size:cover;

`


class App extends React.Component{
constructor(props){
super(props)
this.state={
wavy:{backgroundImage:`url(${this.props.wavio})`},
bgs:'cover',
bgp:'center'
}


}

componentDidMount(){
this.props.getMyWork() 
}



componentDidUpdate(){

}

render(){ 
return (

<AppContainer className="App" style={{backgroundImage:`url(${this.props.mode?bgdm:bg})`,backgroundSize:this.state.bgs,backgroundPosition:this.state.bgp}}>
<Header compRendered={this.props.compRendered}/>
<Container>
{
this.props.compRendered==='Home'?<Home />:<Projects />
}
</Container>
<Div className="waveWrapper waveAnimation">
<div className="waveWrapperInner bgTop">
<div className="wave waveTop" style={this.state.wavy}></div>
</div>
<div className="waveWrapperInner bgMiddle">
<div className="wave waveMiddle" style={this.state.wavy}></div>
</div>
<div className="waveWrapperInner bgBottom">
<div className="wave waveBottom" style={this.state.wavy}></div>
</div>
</Div>
</AppContainer>



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
















