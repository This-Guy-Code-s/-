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
import {getMyWork,navBar,DarkMode} from './redux/actions'

import {brand,
 parenthStyles,
  guyStyles,
  dropdowStyles,
  me
} from './util/headerStyles'


const soci={width:'100%',WebkitTextFillColor:'azure',color:'azure',fontWeight:'bolder',display:'flex',gridGap:'3px'}


class Header extends Component {

  constructor(props){
    super(props)
    this.state={
      tooltipOpen:false,
      currLink:'Projects',
      isOpen:false,
      xOutLight:{marginLeft:'10px',cursor:'pointer',WebkitTextFillColor:'yellow'},
      xOutDark:{marginLeft:'10px',cursor:'pointer',WebkitTextFillColor:'darkgray'}

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
      <Navbar expand="md" style={{WebkitTextFillColor:'#fff',color:'#fff',backgroundColor:'rgba(0,0,0,.5)',}}>

  {/*ME AS MY OWN LOGO AND SOCIAL LINKS TOO*/}
        <div>
       <span className='navbar-brand' id="me"><span style={brand} ><figure>
    <img src={this.props.me} style={me} alt='me' width='50' height='50'/>
    </figure><b style={guyStyles}>Guyton</b> {"  "} <b style={parenthStyles}>Oriji</b></span></span>
      <Tooltip style={soci} placement="bottom" isOpen={this.state.tooltipOpen} autohide={false} target="me" >
        <i className="fab fa-youtube" style={{cursor:'pointer',WebkitTextFillColor:'red'}} onClick={()=>alert('Youtube Channel comming soon...')}></i>
        <i className="fab fa-github" style={{cursor:'pointer',WebkitTextFillColor:'#888'}} onClick={()=>window.location.href='https://www.github.com/guytonoriji'}></i>
        <i className="fab fa-twitter" style={{cursor:'pointer',WebkitTextFillColor:'rgb(29, 161, 242)'}} onClick={()=>window.location.href='https://www.twitter.com/iSpam_The_Code'}></i>
        {
          this.props.mode?(
        <i className="fas fa-sun" title='Light Mode!' style={this.state.xOutLight} onClick={()=>this.props.DarkMode(false)}></i>
            ):(
        <i className="fas fa-moon" title='Dark Mode!' style={this.state.xOutDark} onClick={()=>this.props.DarkMode(true)}></i>
            )
        }
      </Tooltip>
    </div>
  {/*ME AS MY OWN LOGO AND SOCIAL LINKS TOO*/}

        <NavbarToggler onClick={this.toggle} style={{WebkitTextFillColor:'azure',color:'azure'}}>
        <i className="fas fa-ellipsis-v"></i>
        </NavbarToggler>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret >
                <b style={{fontSize:window.innerWidth<=700?'1rem':'1.1rem'}}>Games</b>
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
            this.props.compRendered==='Home'?<span onClick={()=>this.props.navBar('Projects')} style={{cursor:'pointer',fontSize:window.innerWidth<=700?'1rem':'1.3rem'}}><b>Projects</b></span>
            :<span onClick={()=>this.props.navBar('Home')} style={{cursor:'pointer',fontSize:window.innerWidth<=700?'1rem':'1.3rem'}}><b>Home</b></span>
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
    {getMyWork,navBar,DarkMode}
  )(Header)
