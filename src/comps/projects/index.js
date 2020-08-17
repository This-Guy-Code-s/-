import React from 'react'
import {connect} from 'react-redux'
import {getMyWork,tog_description} from '../../redux/actions'
import {
Container,Spinner
} from 'reactstrap';
import { Row} from '../../util/projStyles'
import {myUids} from './extra.js'
import './proj.css'
import jsImg from '../../img/js.png'
import reactImg from '../../img/react.png'



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


<figcaption className='myProjectRole'><i className="fas fa-project-diagram"></i><h1 className="error">P r<span> o </span>j e</h1>
  <h1 className="code"> c<span> t</span><span> s</span></h1><i className="fas fa-project-diagram" style={{transform:'rotate(180deg) rotateX(180deg)'}}></i></figcaption>
</figure>
<Container>
<Row>
{
this.props.work?this.props.work.map(post=>{

return	(




 <div className="col-md-8 col-lg-8 pb-3 card-custom-holder" key={post.id}  style={{display:'flex',borderTopLeftRadius:'25px',borderBottomRightRadius:'25px'}}>

        <div className="card card-custom border-0"  style={{boxShadow:'0 0 10px #000',border:'solid #000',borderTopLeftRadius:'25px',borderBottomRightRadius:'25px'}}>
          <div className="card-custom-img" style={{backgroundImage:`url(${post.image})`}}></div>
          <div className="card-custom-avatar">
            <img className="img-fluid" src={/react/gi.test(post.description)?reactImg:jsImg} alt="project preview" />
          </div>
          <div className="card-body card-custom-bg-body" style={{color:this.props.mode?'azure':'#000',background:this.props.mode?'#242582':'#cafafe',backgroundColor:this.props.mode?'#242582':'#cafafe',overflowY:"auto"}}>
            <h4 className="card-title">{post.title}</h4>
            <p className="card-text ">{post.description}</p>
          </div>
          <div className="card-footer card-custom-footer" style={{color:this.props.mode?'azure':'#000',background:this.props.mode?'#05386b':'#edf5e1',backgroundColor:this.props.mode?'#05386b':'#edf5e1'}}>
            <a href={post.link} className="btn btn-primary">{post.action==='PLAY'?<i className="fas fa-gamepad"></i>:<i className="fas fa-eye"></i>}</a>
            <a href={post.github} className="btn btn-outline-primary"><i className="fas fa-laptop-code"></i> see the code <i className="fas fa-laptop-code"></i></a>
          </div>
        </div>
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




// <div key={post.id} style={cardSDiv}>
// <Card  
// style={cardStylez}
// >
// <CardBody>
// <CardTitle><h3>{post.title}</h3></CardTitle>
// <CardTitle style={{WebkitTextFillColor:"#fc5203"}}><h4><a href={post.github}><i className="fas fa-laptop-code"></i> see the code <i className="fas fa-laptop-code"></i></a></h4></CardTitle>
// </CardBody>
// <CardImg width="100%" src={post.image} alt={post.alt} />
// <CardBody>
// <details open={window.innerWidth<=700?false:true} className='deets'>
// <summary onClick={()=>this.props.tog_description(boost)} style={card_desc}>
// <span ><i className='fas fa-toggle-off' id={boost}></i>
// <h5 style={{fontWeight:'bolder'}}>Description</h5></span>
// </summary>
// <p>{post.description}</p>
// </details>
// <hr />
// <CardLink href={post.link}  style={{display:'flex',flexDirection:'column'}}
// >
// {post.action==='PLAY'?<i className="fas fa-gamepad"></i>:<i className="fas fa-eye"></i>}
// <span
// style={this.actionStyle(post.action)}
// >{post.action}</span>
// </CardLink>
// </CardBody>
// </Card>
// <hr />
// </div>




