import React from 'react';
import {Container} from 'reactstrap'

import Header from './comps/Header'
import Home from './comps/'
import Projects from './comps/projects/'

import {connect} from 'react-redux'
import {getMyWork} from './redux/actions'


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
  

const disable_right_click = document.createElement('script')
// disable_right_click.setAttribute('type','text/javascript')
disable_right_click.setAttribute('language',"JavaScript")

disable_right_click.innerHTML = `


  window.onload = function() {
    document.addEventListener("contextmenu", function(e){
      e.preventDefault();
    }, false);
    document.addEventListener("keydown", function(e) {
    //document.onkeydown = function(e) {
      // "I" key
      if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        disabledEvent(e);
      }
      // "J" key
      if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        disabledEvent(e);
      }
      // "S" key + macOS
      if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        disabledEvent(e);
      }
      // "U" key
      if (e.ctrlKey && e.keyCode == 85) {
        disabledEvent(e);
      }
      // "F12" key
      if (e.keyCode == 123) {
        disabledEvent(e);
      }
    }, false);
    function disabledEvent(e){
      if (e.stopPropagation){
        e.stopPropagation();
      } else if (window.event){
        window.event.cancelBubble = true;
      }
      e.preventDefault();
      return false;
    }
  };
`
  document.querySelector('body').append(disable_right_click)
}



componentDidUpdate(){

}

render(){ 
return (

<AppContainer className="App" style={{backgroundImage:`url(${this.props.mode?this.props.bgdm:this.props.bg})`,backgroundSize:this.state.bgs,backgroundPosition:this.state.bgp}}>
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
















