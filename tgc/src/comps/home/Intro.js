import React from 'react'
import styled from 'styled-components'
import {Card} from 'reactstrap'


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
`

const me = {
	borderRadius:'100%',
	border:'double 3px #240090',
	boxShadow:'0 0 10px #3500D3'
}

let introCard = {
	backgroundColor:'rgba(0,0,0,.5)',
	WebkitTextFillColor:'azure',
	border:'double rgba(250,250,250,.5)',
 	boxShadow:'2px 0 10px #888'
}



class Intro extends React.Component{
	

	render(){
	return(
		<Block>

		<Row>
		<figure>
		<img src={this.props.me} style={me} alt='me' width='50' height='50'/>
		<figcaption style={{fontSize:'1.3rem'}}>Guyton M. Oriji</figcaption>
		</figure>
		<Card style={introCard}>
		<h2 className="alt">A Full-Stack Web Developer</h2>
		<p style={{fontSize:'1.5rem'}}>I was self taught for a few years, with a lot of work done for clients(private and public).
		Now I'll be graduating soon at <a href="http://LambdaSchool.com">LambdaSchool</a> and I am also open for projects and hire.</p>
		</Card>
	 	</Row>

      </Block>
	)

	}
}



export default Intro