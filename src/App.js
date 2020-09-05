import React from 'react';
import {Container} from 'reactstrap'

import Header from './comps/Header'
import Home from './comps/'
import Projects from './comps/projects/'

import {connect} from 'react-redux'
import {getMyWork} from './redux/actions'


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

      <Header/>
<Container>
{
this.props.compRendered==='Home'?<Home />:<Projects />
}
</Container>

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
















