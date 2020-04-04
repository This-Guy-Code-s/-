import React from 'react'
import Intro from './home/Intro.js'
import Skillz from './home/Skillz.js'
import Contact from './home/Contact.js'
import Services from './home/Services.js'




class Home extends React.Component{
	constructor(props){
		super(props)
		this.state={

		}
	}




	render(){
		return(

			<div>
			 <Intro me={this.props.imgz[0]} />
			 <Skillz/>
			 <div style={
			 	{

			 		paddingTop:'100px',
			 		height:'100%',
			 		WebkitTextFillColor:'azure',
			 		fontWeight:'bolder'
			 	}}>
			 	<p style={{fontSize:'1.6rem'}}>
			 	With your own website you can build your brand's credibility,
			 	showcase your work at all times,
			 	increase your audience, 
			 	and always have your self open for opportunities.
			 	 You never know who's admiring your content ,
			 	  bring your audience into the world they want to be in.
			 	   Creating content and good vibes can never get old to me.
			 	     From custom websites to updates to your websites,
			 	 I can help. Contact Me.
			 	 </p>
			 <Contact buttonLabel='Contact Me'/>
			 <Services buttonLabel='My Services'/>
			 </div>
			</div>

			)
	}
}




export default Home
