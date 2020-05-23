import React from 'react';
import './App.css';
import {Container} from 'reactstrap'

import Header from './Header'
import Home from './comps/'
import Projects from './comps/projects/'

import {connect} from 'react-redux'
import {getMyWork,APP_COMP} from './redux/actions'

import {Div} from './util/cloudWaveAnimation'



class App extends React.Component{
constructor(props){
super(props)
this.state={
wavy:{backgroundImage:`url(${this.props.wavio})`}
}
}

componentDidMount(){
this.props.getMyWork() 
}

render(){ 
return (

<APP_COMP className="App">
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
















