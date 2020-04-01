import React from 'react'
import styled from 'styled-components'


const Block = styled.div`
padding-top:50px;
flex:1;
display:flex;
flex-direction:column;
justify-content:flex-start;
alig-items:flex-start;
-webkit-text-fill-color:azure;

`

const Row = styled.div`
padding-top:50px;
flex:1;
display:flex;
flex-direction:row;
-webkit-text-fill-color:azure;
grid-gap:10px;

justify-content:space-between;
alig-items:flex-start;
`

const skills = {
	WebkitTextFillColor:'azure',
	fontSize:'2.5rem',
}

let skillzCard = {
	height:'100px',
	minHeight:'100px',
	maxHeight:'100px',
	backgroundColor:'rgba(0,0,0,.5)',
	WebkitTextFillColor:'azure',
	border:'double rgba(250,250,250,.5)',
 	boxShadow:'2px 0 10px #888'
	}



class Skillz extends React.Component{
	
	render(){
	return(
		<Block>

		<Row>
		<figure>
		<i className="fab fa-linux" style={skills}></i>
		<figcaption style={{fontSize:'1.6rem'}}>
		Linux(deb)
		</figcaption>
		</figure>
		<div style={skillzCard}>
		</div>

		<figure>
		<i className="fab fa-js-square" style={skills}></i>
		<figcaption style={{fontSize:'1.6rem'}}>
		Javascript
		</figcaption>
		</figure>
		<div style={skillzCard}>
		</div>

		<figure>
		<i className="fab fa-react" style={skills}></i>
		<figcaption style={{fontSize:'1.6rem'}}>
		React.js
		</figcaption>
		</figure>
		<div style={skillzCard}>
		</div>

		<figure>
		<i className="fab fa-node-js" style={skills}></i>
		<figcaption style={{fontSize:'1.6rem'}}>
		Node.js
		</figcaption>
		</figure>
		
	 	</Row>

      </Block>
	)

	}
}



export default Skillz