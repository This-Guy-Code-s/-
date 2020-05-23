import React from 'react'
import {connect} from 'react-redux'
import {getMyWork} from '../../redux/actions'
import {
Card, CardImg, CardBody, CardLink,
CardTitle,Container,Spinner
} from 'reactstrap';
import styled from 'styled-components'


const Row = styled.div`flex:1;display:flex;flex-direction:column;justify-content:space-around;align-items:center;grid-gap:50px;`;

const cardStylez = {width:'100%',height:'auto',backgroundColor:'rgba(0,0,0,.5)',WebkitTextFillColor:'azure',fontSize:window.innerWidth<=700?'1.15rem':'1.4rem',fontWeight:'bolder',border:'double #4df7ff',boxShadow:'0 0 20px #5539f3'}



class Projects extends React.Component{
constructor(){
super()
this.actionStyle = this.actionStyle.bind(this)
}
componentDidMount(prevProps){
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


<figcaption className='myRole'><i className="fas fa-project-diagram"></i><br/><b className="error">P r<span> o </span>j e</b>
  <b className="code"> c<span> t</span><span> s</span></b></figcaption>
</figure>
<Container>
<Row>
{
this.props.work?this.props.work.map(post=>{
return	(

<div key={post.id}>
<Card  
style={cardStylez}
>
<CardBody>
<CardTitle>{post.title}</CardTitle>
<CardTitle style={{WebkitTextFillColor:"#fc5203"}}><a href={post.github}><i className="fas fa-laptop-code"></i> see the code <i className="fas fa-laptop-code"></i></a></CardTitle>
</CardBody>
<CardImg width="100%" src={post.image} alt={post.alt} />
<CardBody>
<details open={window.innerWidth<=700?false:true}>
<summary></summary>
<p>{post.description}</p>
</details>
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
<hr />
</div>
)
}):(	
<div>
	 <h4><b style={{WebkitTextFillColor:'azure'}}>Loading Projects...</b></h4>
        <Spinner style={{ width: '3rem', height: '3rem' }} color='danger'/>
</div>
)

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