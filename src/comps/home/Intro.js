import React from 'react'
import {Card} from 'reactstrap'
import {
Block,
Row,
introCard
} from '../../util/introStyles'



class Intro extends React.Component{
constructor(props){
super(props)
this.state={
tooltipOpen:false,
}
}
toggle = () => this.setState({tooltipOpen:!this.state.tooltipOpen});

render(){
return(
<Block>

<Row>

<Card style={introCard}>
<div className='myRole'>
<h1 className="error">Full<span>-</span>Stack</h1>
<h1 className="code">Web<span>-</span><span>Dev</span></h1>
</div>


<p style={{fontSize:window.innerWidth<=700?'1.2rem':'1.65rem',padding:'0px 1px'}}>I am here to help start-ups, small businesses, entrepreneur's, and agencies get better business with good quality websites and satisfying user experience. I believe, to be a sucessful developer one must constantly self improve, have multiple approaches to problems, and stay up to date with technology.</p>
</Card>
</Row>

</Block>
)

}
}



export default Intro