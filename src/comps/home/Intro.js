import React from 'react'
import {Card} from 'reactstrap'
import {
	Block,
	Row,
	me,
	introCard
} from '../../util/introStyles'


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
		<p style={{fontSize:'1.5rem'}}>Hello World, Im a Full-Stack Web App Developer and also studying at<a href="http://LambdaSchool.com">LambdaSchool</a>.I help start-ups, small businesses, entrepreneur's, and agencies get better business with good quality websites and satisfying user experience.</p>
		</Card>
	 	</Row>

      </Block>
	)

	}
}



export default Intro