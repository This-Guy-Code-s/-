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
import {getMyWork} from './redux/actions'
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom'

import {brand,
 parenthStyles,
  guyStyles,
  dropdowStyles,
  me
} from './util/headerStyles'



const soci={width:'100%',WebkitTextFillColor:'azure',color:'azure',fontWeight:'bolder',display:'flex',gridGap:'3px'}

const xOut={marginLeft:'10px',cursor:'pointer',WebkitTextFillColor:'red'}


class Header extends Component {

  constructor(props){
    super(props)
    this.state={
      tooltipOpen:false,
      currLink:'Projects',
      currPushLink:'/-/Projects',
      isOpen:false,

    }
    this.toggle = this.toggle.bind(this)
  }


 componentDidMount(){
    this.props.getMyWork() 
          this.setState({tooltipOpen:!this.state.tooltipOpen})
  }

  checkUrl(){
    setTimeout(()=>{
           if(/Projects/.test(this.props.history.location.pathname)){
      this.setState({currLink:'Home',currPushLink:'/-/'})
    }else{
      this.setState({currLink:'Projects',currPushLink:'/-/Projects'})

    }
    },0)
 
  }


  toggle(){
    this.setState({
      isOpen:!this.state.isOpen,
      tooltipOpen:!this.state.tooltipOpen
    })
  }

  render() {


    return (
       <div>
      <Navbar  expand="md"  
      style={{
        WebkitTextFillColor:'#fff',
        color:'#fff',
        backgroundColor:'rgba(0,0,0,.5)',
      }}
      >


  {/*ME AS MY OWN LOGO AND SOCIAL LINKS TOO*/}
        <div>
       <Link to='/-/' className='navbar-brand' id="DisabledAutoHideExample"><span style={brand} ><figure>
    <img src={this.props.me} style={me} alt='me' width='50' height='50'/>
    </figure><b style={guyStyles}>Guyton</b> {"  "} <b style={parenthStyles}>Oriji</b></span></Link>
      <Tooltip style={soci} placement="bottom" isOpen={this.state.tooltipOpen} autohide={false} target="DisabledAutoHideExample" >
        <i class="fab fa-youtube" style={{cursor:'pointer'}} onClick={()=>alert('Youtube Channel comming soon...')}></i>
        <i className="fab fa-github" style={{cursor:'pointer'}} onClick={()=>window.location.href='https://www.github.com/guytonoriji'}></i>
        <i className="fab fa-twitter" style={{cursor:'pointer'}} onClick={()=>window.location.href='https://www.twitter.com/iSpam_The_Code'}></i>
        <i className="fas fa-minus-circle" title='remove this...' style={xOut} onClick={()=>this.setState({tooltipOpen:!this.state.tooltipOpen})}></i>
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
              <DropdownMenu left='true'
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
              <Link to={this.state.currPushLink} onClick={()=>this.checkUrl()}>{this.state.currLink}</Link>
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

export default withRouter(connect(
  mapStateToProps,
    {getMyWork}
  )(Header))
