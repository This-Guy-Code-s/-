import React from 'react'
import {connect} from 'react-redux'
import {getMyWork,tog_description,$witch} from '../../redux/actions'
import {
Container,Spinner
} from 'reactstrap';
import './proj.scss'
import jsImg from '../../img/js.png'
import reactImg from '../../img/react.png'
import nodeImg from '../../img/node.png'
import fbImg from '../../img/fb.png'
import pythonImg from '../../img/pythonImg.png'



class Projects extends React.Component{
constructor(props){
super(props)
this.state={
}

this.actionStyle = this.actionStyle.bind(this)
}


actionStyle(act){
if(act==='PLAY'){
return {WebkitTextFillColor:'#fc0303'}
}else{
return {WebkitTextFillColor:'#03fc13'}
}
}


componentDidMount(prevProps){
this.props.getMyWork();
}





render(){


	
return (

<div>
<figure id="intro-proj" style={{WebkitTextFillColor:'azure',marginTop:'30px'}}>


<figcaption className=' myRole myProjectRole'><i className="fas fa-project-diagram"></i><h1 className="error">P r<span> o </span>j e</h1>
  <h1 className="code"> c<span> t</span><span> s</span></h1><i className="fas fa-project-diagram" style={{transform:'rotate(180deg) rotateX(180deg)'}}></i></figcaption>
</figure>
<Container>


<div className="proj-switchers" id='keep-level'>
 <button id="toggler" onClick={()=>{this.props.$witch('Design',this.props.work);return setTimeout(()=>{document.querySelector('#keep-level').scrollIntoView()},500)}} className="primary-neumorph">WebApps</button>
 <button id="toggler" onClick={()=>{this.props.$witch('Game',this.props.work);return setTimeout(()=>{document.querySelector('#keep-level').scrollIntoView()},500)}} className="primary-neumorph">Games</button>
 <button id="toggler" onClick={()=>{this.props.$witch('CLI/GUI',this.props.work);return setTimeout(()=>{document.querySelector('#keep-level').scrollIntoView()},500)}} className="primary-neumorph">CLI/GUI</button>
 <button id="toggler" onClick={()=>{this.props.$witch('All',this.props.work);return setTimeout(()=>{document.querySelector('#keep-level').scrollIntoView()},500)}} className="primary-neumorph">All</button>{" "}
</div>


<div id="movie-card-list" className='movie-card-holder'>
{
this.props.workx?this.props.workx.map(post=>{

      return post.action?(


  <div className="movie-card "  style={{backgroundImage:`url(${post.image})`}}  key={post.id}>
    <div className="primary-neumorph movie-card__overlay" style={{background:this.props.mode?
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

):true//if its a game then dont render








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
{getMyWork,tog_description,$witch}
)(Projects)


