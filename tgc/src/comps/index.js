import React from 'react'
import Intro from './home/Intro.js'
import Skillz from './home/Skillz.js'
import Contact from './home/Contact.js'




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

			 	}}>
			 <Contact buttonLabel='Contact Me'/>
			 </div>
			</div>

			)
	}
}




export default Home
