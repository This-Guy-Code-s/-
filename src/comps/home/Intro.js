import React from 'react'
import {Card} from 'reactstrap'
import {
Block,
Row,
introCard
} from '../../util/introStyles'


import {brand,
guyStyles,
me
} from '../../util/headerStyles'


import {connect} from 'react-redux'

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
<h1 className="error" id='intro'>Full<span>-</span>Stack</h1>
<h1 className="code">Web<span>-</span><span>Dev</span></h1>
</div>

<span className='navbar-brand' id="me"><span style={brand} ><figure>
<img src={this.props.me} style={me} alt='thisguycodez.com' width='50' height='50'/>
</figure><h2 style={guyStyles}>Guy</h2> {" .M O"}</span></span>
<p style={{fontSize:window.innerWidth<=700?'1.2rem':'1.65rem',padding:'0px 1px'}}>" I am here to help start-ups, small businesses, entrepreneur's, and agencies get better business with good quality websites and satisfying user experience. I believe, to be a sucessful developer one must constantly self improve, have multiple approaches to problems, and stay up to date with technology. "</p>
</Card>
</Row>

</Block>
)

}
}


const mapStateToProps = state =>{
	return {
		me:state.me
	}
}
export default connect(mapStateToProps,{})(Intro)