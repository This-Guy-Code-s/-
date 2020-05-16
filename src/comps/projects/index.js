import React from 'react'
import {connect} from 'react-redux'
import {getMyWork} from '../../redux/actions'
import {
Card, CardImg, CardText, CardBody, CardLink,
CardTitle,Container
} from 'reactstrap';

import styled from 'styled-components'


const Row = styled.div`
display:flex;
flex-direction:column;
grid-gap:50px;
`;

const cardStylez = {
backgroundColor:'rgba(0,0,0,.5)',
WebkitTextFillColor:'azure',
fontSize:window.innerWidth<=500?'1rem':'1.4rem',
fontWeight:'bolder',
border:'double #4df7ff',
boxShadow:'0 0 20px #5539f3'

}



class Projects extends React.Component{
constructor(){
super()
this.actionStyle = this.actionStyle.bind(this)
}
componentWillMount(prevProps){
this.props.getMyWork()
}

actionStyle(act){
if(act==='PLAY'){
return {WebkitTextFillColor:'#fc0303'}
}else{
return {WebkitTextFillColor:'#03fc13'}
}
}
render(){
return (

<div>
<figure style={{WebkitTextFillColor:'azure',marginTop:'30px'}}>
<i className="fas fa-project-diagram"></i>
<figcaption style={{fontSize:'1.3rem'}}><h1>Projects</h1></figcaption>
</figure>
<Container>
<Row>
{
this.props.work && 
this.props.work.map(post=>{
return	(

<Card key={post.id} 
style={cardStylez}
>
<CardBody>
<CardTitle>{post.title}</CardTitle>
<CardTitle style={{WebkitTextFillColor:"#fc5203"}}><a href={post.github}><i className="fas fa-laptop-code"></i> see the code <i className="fas fa-laptop-code"></i></a></CardTitle>
</CardBody>
<CardImg width="100%" src={post.image} alt={post.alt} />
<CardBody>
<CardText>{post.description}</CardText>
<CardLink href={post.link} 
>
{post.action==='PLAY'?<i className="fas fa-gamepad"></i>:<i className="fas fa-eye"></i>}
<br />
<span
style={this.actionStyle(post.action)}
>{post.action}</span>
</CardLink>
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