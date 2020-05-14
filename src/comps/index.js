import React from 'react'
import Intro from './home/Intro.js'
import Skillz from './home/Skillz.js'
import Contact from './home/Contact.js'
import Services from './home/Services.js'
import {connect} from 'react-redux'
import {changeBtnLabel} from '../redux/actions'

const pitchStyle={
paddingTop:'100px',
WebkitHeight:'100%',
height:'100%',
WebkitTextFillColor:'azure',
color:'azure',
fontWeight:'bolder'
			 	}

class Home extends React.Component{
	constructor(props){
		super(props)
		this.state={
			pitch:`With your own website you can build your brand's credibility,
			 	showcase your work at all times,
			 	increase your audience, 
			 	and always have your self open for opportunities.
			 	 You never know who's admiring your content ,
			 	  bring your audience into the world they want to be in.
			 	   Creating content and good vibes can never get old to me.
			 	     From custom websites to updates to your websites,
			 	 I can help. Contact Me.`,
			
		}
	}


		

	render(){
		return(

			<div>
			 <Intro/>
			 <Skillz/>
			 <div style={pitchStyle}>
			 	<p style={{fontSize:'1.6rem'}}>
			 	{this.state.pitch}
			 	 </p>
			 <Contact buttonLabel={this.props.btnL}/>
		    <Services buttonLabel={this.props.btnLL} />
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