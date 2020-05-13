import React from 'react'
import {Card} from 'reactstrap'
import {
	Block,
	Row,
	introCard
} from '../../util/introStyles'


class Intro extends React.Component{
	

	render(){
	return(
		<Block>

		<Row>
		
		<Card style={introCard}>
		<h2 className="alt">Full-Stack Web Developer</h2>
		<p style={{fontSize:'1.5rem'}}>I am here to help start-ups, small businesses, entrepreneur's, and agencies get better business with good quality websites and satisfying user experience. I believe, to be a sucessful developer one must constantly self improve, have multiple approaches to problems, and stay up to date with technologies.</p>
		</Card>
	 	</Row>

      </Block>
	)

	}
}



export default Intro