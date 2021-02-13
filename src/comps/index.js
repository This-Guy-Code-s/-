import React from 'react'
import Intro from './home/Intro.js'
import Skillz from './home/Skillz.js'
import Contact from './home/Contact.js'
import {connect} from 'react-redux'
import {changeBtnLabel} from '../redux/actions'
import {brand,
guyStyles,
me
} from '../util/headerStyles'


const pitchStyle={paddingTop:'100px',WebkitHeight:'100%',height:'100%',WebkitTextFillColor:'azure',color:'azure',fontWeight:'bolder'}

class Home extends React.Component{
constructor(props){
super(props)
this.state={


}
}

render(){
return(

<div>
<Intro/>
<Skillz/>
<div style={pitchStyle}>
<span className='navbar-brand' id="me"><span style={brand} ><figure>
<img src={this.props.me} style={me} alt='me' width='50' height='50'/>
</figure><h2 style={guyStyles}>Guy</h2> {" .M O"}</span></span>
<p style={{fontSize:window.innerWidth<=700?'1.2rem':'1.6rem'}}>
{this.props.pitch}
</p>
<Contact buttonLabel={this.props.btnL} className="registration-holder"/>
</div>
</div>

)
}
}





const mapStateToProps = state =>{
return {
...state
}
}

export default connect(
mapStateToProps,
{changeBtnLabel}
)(Home)