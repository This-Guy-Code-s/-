import React, { Component } from 'react';
import { Collapse,
Navbar,
NavbarToggler,
Nav,
UncontrolledDropdown,
DropdownToggle,
DropdownMenu,
DropdownItem,
Tooltip,
Spinner
} from 'reactstrap'
import {connect} from 'react-redux'
import {navBar,DarkMode} from './redux/actions'

import {brand,
guyStyles,
dropdowStyles,
me,
NavbarStyle,
yt,
gh,
resume,
navbarTogStyle,
navBtnStyle,
xOutLight,
xOutDark,
soci
} from './util/headerStyles'



class Header extends Component {

constructor(props){
super(props)
this.state={
tooltipOpen:false,
isOpen:false

}
this.toggle = this.toggle.bind(this)
}


componentDidMount(){
this.setState({tooltipOpen:!this.state.tooltipOpen})
}

toggle(){
this.setState({
isOpen:!this.state.isOpen,
tooltipOpen:!this.state.tooltipOpen,
})
}

render() {
return (
<div style={{flex:1}}>
<Navbar expand="md" style={NavbarStyle}>


{/*ME AS MY OWN LOGO AND SOCIAL LINKS TOO*/}
<div>
<span className='navbar-brand' id="me"><span style={brand} ><figure>
<img src={this.props.me} style={me} alt='me' width='50' height='50'/>
</figure><h2 style={guyStyles}>Guy</h2> {" .M O"}</span></span>
<Tooltip style={soci} placement="bottom" isOpen={this.state.tooltipOpen} autohide={false} target="me" >
<i className="fab fa-youtube" style={yt} onClick={()=>window.location.href='https://www.youtube.com/channel/UC0vDKn1yF10wwQ13i6EV-rg'}></i>
<i className="fab fa-github" style={gh} onClick={()=>window.location.href='https://www.github.com/thisguycodez'}></i>
<a className="fas fa-download" style={resume} title="Download My Resume" href='./files/resume.pdf' download="Guyton-Guy-Resume.pdf"></a>
{
this.props.mode?(<i className="fas fa-sun" title='Light Mode!' style={xOutLight} onClick={()=>this.props.DarkMode(false)}></i>)
:(<i className="fas fa-moon" title='Dark Mode!' style={xOutDark} onClick={()=>this.props.DarkMode(true)}></i>)
}
</Tooltip>
</div>
{/*ME AS MY OWN LOGO AND SOCIAL LINKS TOO*/}

<NavbarToggler onClick={this.toggle} style={navbarTogStyle}>
<i className="fas fa-bars"></i>
</NavbarToggler>
<Collapse isOpen={this.state.isOpen} navbar>
<Nav className="mr-auto" navbar>

<UncontrolledDropdown nav inNavbar>
<DropdownToggle nav caret >
<h2 style={navBtnStyle}>Games</h2>
</DropdownToggle>
<DropdownMenu
style={dropdowStyles} left='true'>
{
this.props.work && this.props.work.length>1?this.props.work.map(wrk=>{
https://www.amazon.com/promocode/A1UFIWC52N42Z2?ref_=assoc_tag_ph_1524218830414&_encoding=UTF8&camp=1789&creative=9325&linkCode=pf4&tag=thisguycodez-20&linkId=9ddd2064254c1eca9e726d86ac0a3c56
return wrk.action==='PLAY'?(
<DropdownItem style={dropdowStyles} href={wrk.link} key={wrk.id}>
{wrk.title}
</DropdownItem>)
:false
}):(
<Spinner size="sm" color="info" key={Math.floor(Math.random() * 1000)}/>
)
}  
{/*PROMO GAME CODES BELOW*/}

{
	this.props.promoGameCodes.map((promo,i)=>{
		return (

			<DropdownItem style={dropdowStyles} href={promo.link} key={i}>
{promo.name}
</DropdownItem>


			)
	})
}

{/*PROMO GAME CODES ABOVE*/}

</DropdownMenu>
</UncontrolledDropdown>
</Nav>
{
this.props.compRendered==='Home'?<span onClick={()=>this.props.navBar('Projects')} style={navBtnStyle}><h3>Projects</h3></span>
:<span onClick={()=>this.props.navBar('Home')} style={navBtnStyle}><h3>Home</h3></span>
}

</Collapse>
</Navbar>
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
{navBar,DarkMode}
)(Header)
