import React, { Component } from 'react';
import { Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Tooltip
} from 'reactstrap'
import {connect} from 'react-redux'
import {getMyWork,navBar} from './redux/actions'

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
      mode_:this.props.mode,
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

   async changingMode(){try{this.props.DarkMode()}catch(err){throw new Error(err)}}

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
        <i className="fab fa-youtube" style={{cursor:'pointer'}} onClick={()=>alert('Youtube Channel comming soon...')}></i>
        <i className="fab fa-github" style={{cursor:'pointer'}} onClick={()=>window.location.href='https://www.github.com/guytonoriji'}></i>
        <i className="fab fa-twitter" style={{cursor:'pointer'}} onClick={()=>window.location.href='https://www.twitter.com/iSpam_The_Code'}></i>
        {
          this.state.mode_?(
        <i className="fas fa-sun" title='remove this...' style={this.state.xOutLight} onClick={()=>this.changingMode()}></i>
            ):(
        <i className="fas fa-moon" title='remove this...' style={this.state.xOutDark} onClick={()=>this.changingMode()}></i>
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
                Games
              </DropdownToggle>
              <DropdownMenu
              style={dropdowStyles}>
              {
                this.props.work && this.props.work.map(wrk=>{

               if(wrk.action==='PLAY'){
                     return (
                     <DropdownItem style={dropdowStyles} href={wrk.link} key={wrk.id}>
                {wrk.title}
                </DropdownItem>

                    )
                  }else{return true}
                })
              }  
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {
            this.props.compRendered==='Home'?<span onClick={()=>this.props.navBar('Projects')} style={{cursor:'pointer',fontWeight:'bolder'}}>Projects</span>:<span onClick={()=>this.props.navBar('Home')} style={{cursor:'pointer',fontWeight:'bolder'}}>Home</span>
          }
              
        </Collapse>
      </Navbar>
    </div>
    )
  }
}


  const mapStateToProps = state =>{
    return {
     work:state.work
    }
  }

export default connect(
  mapStateToProps,
    {getMyWork,navBar}
  )(Header)
