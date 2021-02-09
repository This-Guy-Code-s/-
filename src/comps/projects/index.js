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
import nodeImg from '../../img/node.png'
import fbImg from '../../img/fb.png'
import pythonImg from '../../img/pythonImg.png'



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
<figure id="intro-proj" style={{WebkitTextFillColor:'azure',marginTop:'30px'}}>


<figcaption className=' myRole myProjectRole'><i className="fas fa-project-diagram"></i><h1 className="error">P r<span> o </span>j e</h1>
  <h1 className="code"> c<span> t</span><span> s</span></h1><i className="fas fa-project-diagram" style={{transform:'rotate(180deg) rotateX(180deg)'}}></i></figcaption>
</figure>
<Container>
<div id="movie-card-list" className='movie-card-holder'>
{
this.props.work?this.props.work.map(post=>{

return	(


  <div className="movie-card"  style={{backgroundImage:`url(${post.image})`}}  key={post.id}>
    <div className="movie-card__overlay" style={{background:this.props.mode?
      `linear-gradient(to ${window.innerWidth<=700?'bottom':'right'}, rgba(42,159,255,.2) 0%,rgba(33,33,32,1) ${window.innerWidth<=700?'80%':'60%'},rgba(33,33,32,1) 100%)`
      :`linear-gradient(to ${window.innerWidth<=700?'bottom':'right'}, rgba(245,245,245,.4) 4%,#999 ${window.innerWidth<=700?'96%':'60%'},rgba(245,245,245,1) 100%)`}}></div>
    
    <div className="movie-card__content">
      <div className="movie-card__header">
        <h3 className="movie-card__title" style={{WebkitTextFillColor:this.props.mode?'azure':'#000'}}>{post.title}</h3>
        <h4 className="movie-card__info" style={{WebkitTextFillColor:this.props.mode?'#2a9fff':'#000'}}>{post.description}</h4>
      </div>
      <div className="movie-card__desc"><div className="card-custom-avatar">
            
            {/pure/gi.test(post.description) || /plain/gi.test(post.description)?
              (
                <img className="img-fluid" src={jsImg} alt="project code language used" width='30' height='30'/>
            ):true}

            {/react/gi.test(post.description)?
              (
                <img className="img-fluid" src={reactImg} alt="project code language used" width='30' height='30'/>
            ):true}

              {/node/gi.test(post.description)?
              (
                <img className="img-fluid" src={nodeImg} alt="project code language used" width='30' height='30'/>
            ):true}

              {/firebase/gi.test(post.description)?
              (
                <img className="img-fluid" src={fbImg} alt="project code language used" width='30' height='30'/>
            ):true}
              {
              /python/gi.test(post.description)?
              (
                <img className="img-fluid" src={pythonImg} alt="project code language used" width='30' height='30'/>
            ):true}

          </div></div>
      <a href={post.link} className="see-link" style={{borderRadius:'100%',WebkitTextFillColor:this.props.mode?'azure':'#000'}}>{post.action==='PLAY'?<i className="fas fa-gamepad"></i>:<i className="fas fa-eye"></i>} <small><code>{post.action==='PLAY'?'play':'view'}</code></small></a>
      <a href={post.github} className="btn btn-outline-primary" style={{WebkitTextFillColor:this.props.mode?'azure':'#000'}}><i className="fas fa-laptop-code"></i> see the code <i className="fas fa-laptop-code"></i></a>
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
// <div className="movie-card__share">
//       <button className="movie-card__icon"><i className="material-icons">&#xe87d</i></button>
//       <button className="movie-card__icon"><i className="material-icons">&#xe253</i></button>
//       <button className="movie-card__icon"><i className="material-icons">&#xe80d</i></button>
//     </div>