import React from 'react'

import {
Block,
Blockk,
Row,
SkillzCard
} from '../../util/skillzStyles'




class Skillz extends React.Component{

render(){
return(
<div>

<Blockk><figure>
<i className="fas fa-layer-group "
style={{fontSize:window.innerWidth<=700?'3rem':'4rem'}}></i>
<figcaption><h2 style={{fontSize:window.innerWidth<=700?'1.8rem':'3rem',textShadow:'0 0 10px #000',fontFamily:"Permanent Marker, cursive"}}>My Stack</h2></figcaption>
</figure></Blockk>
<Block>



<Row>
<SkillzCard className='skillzAnime'>
<figure>
<i className="fab fa-html5"></i>
<figcaption>
<h6>HTML5</h6>
</figcaption>
</figure>
</SkillzCard>


<SkillzCard className='skillzAnime'>
<figure>
<i className="fab fa-css3-alt" ></i>
<figcaption>
<h6>CSS3</h6>
</figcaption>
</figure>
</SkillzCard>


<SkillzCard className='skillzAnime'>
<figure>
<i className="fab fa-bootstrap" ></i>
<figcaption>
<h6>Bootstrap</h6>
</figcaption>
</figure>
</SkillzCard>

<SkillzCard className='skillzAnime'>
<figure>
<i className="fab fa-python"></i>
<figcaption>
<h6>Python</h6>
</figcaption>
</figure>
</SkillzCard>

</Row>



<Row>

<SkillzCard className='skillzAnime'>
<figure>
<i className="fab fa-js-square" ></i>
<figcaption>
<h6>Javascript</h6>
</figcaption>
</figure>
</SkillzCard>



<SkillzCard className='skillzAnime'>
<figure>
<i className="fab fa-react" ></i>
<figcaption>
<h6>React.js</h6>
</figcaption>
</figure>
</SkillzCard>


<SkillzCard className='skillzAnime'>
<figure>
<i className="fas fa-atom" ></i>
<figcaption>
<h6>React-Redux</h6>
</figcaption>
</figure>
</SkillzCard>


<SkillzCard className='skillzAnime'>
<figure>
<i className="fab fa-node-js" ></i>
<figcaption>
<h6>Express.js</h6>
</figcaption>
</figure>
</SkillzCard>
</Row>


<Row>

<SkillzCard className='skillzAnime'>
<figure>
<i className="fab fa-node" ></i>
<figcaption>
<h6>Node.js</h6>
</figcaption>
</figure>
</SkillzCard>


<SkillzCard className='skillzAnime'>
<figure>
<i className="fas fa-table"></i>
<figcaption>
<h6>DB Design</h6>
</figcaption>
</figure>
</SkillzCard>


<SkillzCard className='skillzAnime'>
<figure>
<i className="fas fa-database" ></i>
<figcaption>
<h6>KnexJS</h6>
</figcaption>
</figure>
</SkillzCard>




<SkillzCard className='skillzAnime'>
<figure>
<i className="fas fa-database" ></i>
<figcaption>
<h6>Flask</h6>
</figcaption>
</figure>
</SkillzCard>

</Row>

</Block>
</div>
)

}
}



export default Skillz
