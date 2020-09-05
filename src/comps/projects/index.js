import React from 'react'
import {connect} from 'react-redux'
import {getMyWork,tog_description} from '../../redux/actions'
import {
Container,Spinner
} from 'reactstrap';
import {myUids} from './extra.js'
import './proj.scss'
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


<figcaption className='myProjectRole'><i className="fas fa-project-diagram"></i><h3 className="error">P r<span> o </span>j e</h3>
  <h3 className="code"> c<span> t</span><span> s</span></h3><i className="fas fa-project-diagram" style={{transform:'rotate(180deg) rotateX(180deg)'}}></i></figcaption>
</figure>
<Container>
<div id="movie-card-list" className='movie-card-holder'>
{
this.props.work?this.props.work.map(post=>{

return	(


  <div class="movie-card"  style={{backgroundImage:`url(${post.image})`}}  key={post.id}>
    <div class="movie-card__overlay"></div>
    
    <div class="movie-card__content">
      <div class="movie-card__header">
        <h3 class="movie-card__title">{post.title}</h3>
        <h4 class="movie-card__info">{post.description}</h4>
      </div>
      <p class="movie-card__desc"><div className="card-custom-avatar">
            <img className="img-fluid" src={/react/gi.test(post.description)?reactImg:jsImg} alt="project preview" width='30' height='30'/>
          </div></p>
      <a href={post.link} className="btn btn-primary">{post.action==='PLAY'?<i className="fas fa-gamepad"></i>:<i className="fas fa-eye"></i>}</a>
      <a href={post.github} className="btn btn-outline-primary"><i className="fas fa-laptop-code"></i> see the code <i className="fas fa-laptop-code"></i></a>
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
</div>
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



//SET UP DB FOR LIKE COMMENT AND SHARE FEATURES AFTER HERBI IS COMPLETE, NEEED MORE PROJECTS 1ST
// <div class="movie-card__share">
//       <button class="movie-card__icon"><i class="material-icons">&#xe87d</i></button>
//       <button class="movie-card__icon"><i class="material-icons">&#xe253</i></button>
//       <button class="movie-card__icon"><i class="material-icons">&#xe80d</i></button>
//     </div>