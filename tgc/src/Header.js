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


import {Link} from 'react-router-dom'


const brand = {
display:'flex',
background:'-webkit-linear-gradient(azure,#3500D3)',
WebkitBackgroundClip:'text',
WebkitTextFillColor:'transparent'

}

const brand_signs = {
}

const brand_this = {
WebkitTextFillColor:'#700022',
  
}

const brand_guy = {
  
}

const brand_codez = {
  
}




class Header extends Component {

  constructor(props){
    super(props)
    this.state={
      isOpen:false,

    }
    this.toggle = this.toggle.bind(this)
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
        backgroundColor:'rgba(0,0,0,.5)'
      }}
      >
       <Link to='/' className='navbar-brand'><span style={brand} title='return true;'><b style={brand_this}>This.</b><b style={brand_guy}>Guy</b><b style={brand_signs}>(</b><b style={brand_codez}>Codez</b><b style={brand_signs}>)</b></span></Link>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret >
                Games
              </DropdownToggle>
              <DropdownMenu left='true'
              style={{
                WebkitTextFillColor:'#fff',
                color:'#fff',
                 backgroundColor:'rgba(0,0,0,.5)'
              }}

              >
                <DropdownItem style={{
                WebkitTextFillColor:'#fff',
                color:'#fff',
                 backgroundColor:'rgba(0,0,0,.5)'
              }}
>
                  Tic Tac Toe
                </DropdownItem>
                <DropdownItem style={{
                WebkitTextFillColor:'#fff',
                color:'#fff',
                 backgroundColor:'rgba(0,0,0,.5)'
              }}
>
                  flappy Bird
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem style={{
                WebkitTextFillColor:'#fff',
                color:'#fff',
                 backgroundColor:'rgba(0,0,0,.5)'
              }}
>
                  Chess
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
              <Link to='/projects'>Projects</Link>
        </Collapse>
      </Navbar>
    </div>
    
    )
  }
}

export default Header;
