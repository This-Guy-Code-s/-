import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {getMyWork} from '../../redux/actions'
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle,Container,Row
} from 'reactstrap';






 class Projects extends React.Component{
 				constructor(){
 					super()
 					this.state={
 						likesGlitch:[]
 					}
 				}

 		componentDidMount(prevProps){
 			if(localStorage.getItem('likesGlitch')){
 				this.setState({
 					likesGlitch:JSON.parse(localStorage.getItem('likesGlitch'))
 				})
 			}
 			this.props.getMyWork()
 		}

 		componentDidUpdate(){

 		}

 		addLike(){

 		}

		render(){
			return (

				<div>
				below
				<Container>
				<Row>
				{

					this.props.work && 
					this.props.work.map(post=>{
						return	(

							 <Card key={post.id} 
							 style={{
							 	backgroundColor:'rgba(0,0,0,.5)',
							 	WebkitTextFillColor:'azure',
							 	fontSize:'1.8rem',
							 	fontWeight:'bolder',

							 }}
							 >
        <CardBody>
          <CardTitle>{post.title}</CardTitle>
          <CardSubtitle>Likes:{JSON.parse(post.likes)}</CardSubtitle>
        </CardBody>
        <CardImg width="100%" src={post.image} alt={post.alt} />
        <CardBody>
          <CardText>{post.description}</CardText>
          <CardLink href={post.link}>Link</CardLink>
        </CardBody>
      </Card>

							)
					})

				}
				</Row>
				</Container>
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
	{getMyWork}
	)(Projects)