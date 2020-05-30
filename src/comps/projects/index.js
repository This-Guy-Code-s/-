import React from 'react'
import {connect} from 'react-redux'
import {getMyWork,tog_description} from '../../redux/actions'
import {
Card, CardImg, CardBody, CardLink,
CardTitle,Container,Spinner
} from 'reactstrap';
import { Row, cardStylez,cardSDiv, card_desc} from '../../util/projStyles'
import {myUids} from './extra.js'





class Projects extends React.Component{
constructor(){
super()
this.actionStyle = this.actionStyle.bind(this)
this.$etId = this.$etId.bind(this)
}
componentDidMount(prevProps){
this.props.getMyWork();
}

actionStyle(act){
if(act==='PLAY'){
return {WebkitTextFillColor:'#fc0303'}
}else{
return {WebkitTextFillColor:'#03fc13'}
}
}


$etId(){
				const newID = []
			myUids.forEach((char,i)=>{
if((Math.floor(Math.random() * i) % 2) === Math.floor(Math.random() * 2 + 1))
{newID.push(char+myUids[Math.floor(Math.random() * 52)])}})
	
	return newID.join('')
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
	let boost = this.$etId();

return	(

<div key={post.id} style={cardSDiv}>
<Card  
style={cardStylez}
>
<CardBody>
<CardTitle>{post.title}</CardTitle>
<CardTitle style={{WebkitTextFillColor:"#fc5203"}}><a href={post.github}><i className="fas fa-laptop-code"></i> see the code <i className="fas fa-laptop-code"></i></a></CardTitle>
</CardBody>
<CardImg width="100%" src={post.image} alt={post.alt} />
<CardBody>
<details open={window.innerWidth<=700?false:true} className='deets'>
<summary onClick={()=>this.props.tog_description(boost)} style={card_desc}>
<span ><i className='fas fa-toggle-off' id={boost}></i>
Description</span>
</summary>
<p>{post.description}</p>
</details>
<hr />
<CardLink href={post.link}  style={{display:'flex',flexDirection:'column'}}
>
{post.action==='PLAY'?<i className="fas fa-gamepad"></i>:<i className="fas fa-eye"></i>}
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
{getMyWork,tog_description}
)(Projects)