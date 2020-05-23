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
parenthStyles,
guyStyles,
dropdowStyles,
me,
NavbarStyle,
yt,
gh,
tw,
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
<div>
<Navbar expand="md" style={NavbarStyle}>

{/*ME AS MY OWN LOGO AND SOCIAL LINKS TOO*/}
<div>
<span className='navbar-brand' id="me"><span style={brand} ><figure>
<img src={this.props.me} style={me} alt='me' width='50' height='50'/>
</figure><b style={guyStyles}>Guyton</b> {"  "} <b style={parenthStyles}>Oriji</b></span></span>
<Tooltip style={soci} placement="bottom" isOpen={this.state.tooltipOpen} autohide={false} target="me" >
<i className="fab fa-youtube" style={yt} onClick={()=>alert('Youtube Channel comming soon...')}></i>
<i className="fab fa-github" style={gh} onClick={()=>window.location.href='https://www.github.com/guytonoriji'}></i>
<i className="fab fa-twitter" style={tw} onClick={()=>window.location.href='https://www.twitter.com/iSpam_The_Code'}></i>
{
this.props.mode?(<i className="fas fa-sun" title='Light Mode!' style={xOutLight} onClick={()=>this.props.DarkMode(false)}></i>)
:(<i className="fas fa-moon" title='Dark Mode!' style={xOutDark} onClick={()=>this.props.DarkMode(true)}></i>)
}
</Tooltip>
</div>
{/*ME AS MY OWN LOGO AND SOCIAL LINKS TOO*/}

<NavbarToggler onClick={this.toggle} style={navbarTogStyle}>
<i className="fas fa-ellipsis-v"></i>
</NavbarToggler>
<Collapse isOpen={this.state.isOpen} navbar>
<Nav className="mr-auto" navbar>

<UncontrolledDropdown nav inNavbar>
<DropdownToggle nav caret >
<b style={navBtnStyle}>Games</b>
</DropdownToggle>
<DropdownMenu
style={dropdowStyles} left='true'>
{
this.props.work?this.props.work.map(wrk=>{

return wrk.action==='PLAY'?(
<DropdownItem style={dropdowStyles} href={wrk.link} key={wrk.id}>
{wrk.title}
</DropdownItem>):false
}):(
<Spinner size="sm" color="info" />
)
}  
</DropdownMenu>
</UncontrolledDropdown>
</Nav>
{
this.props.compRendered==='Home'?<span onClick={()=>this.props.navBar('Projects')} style={navBtnStyle}><b>Projects</b></span>
:<span onClick={()=>this.props.navBar('Home')} style={navBtnStyle}><b>Home</b></span>
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
