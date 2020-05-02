import React, { Component } from 'react';
import { Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import {connect} from 'react-redux'
import {getMyWork} from './redux/actions'

import {Link} from 'react-router-dom'

import {brand,
 brand_this,
 parenthStyles,
  guyStyles,
  codezStyles,
  dropdowStyles
} from './util/headerStyles'



class Header extends Component {

  constructor(props){
    super(props)
    this.state={
      isOpen:false,

    }
    this.toggle = this.toggle.bind(this)
  }


 componentDidMount(){
    this.props.getMyWork()
      
  }

  toggle(){
    this.setState({
      isOpen:!this.state.isOpen
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
       <Link to='/-/' className='navbar-brand'><span style={brand} title='return true;'><b style={brand_this}>This.</b><b style={guyStyles}>Guy</b><b style={parenthStyles}>(</b><b style={codezStyles}>Codez</b><b style={parenthStyles}>)</b></span></Link>
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
                     <DropdownItem style={dropdowStyles}href={wrk.link} key={wrk.id}>
                {wrk.title}
                </DropdownItem>

                    )
                  }else{return true}
                })
              }  
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
              <Link to='/-/projects'>Projects</Link>
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
    {getMyWork}
  )(Header);
