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


const brand = {
display:'flex',
background:'-webkit-linear-gradient(azure,azure,#4df7ff)',
WebkitBackgroundClip:'text',
WebkitTextFillColor:'transparent',

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
       <Link to='/-/' className='navbar-brand'><span style={brand} title='return true;'><b style={brand_this}>This.</b><b style={brand_guy}>Guy</b><b style={brand_signs}>(</b><b style={brand_codez}>Codez</b><b style={brand_signs}>)</b></span></Link>
        <NavbarToggler onClick={this.toggle} style={{WebkitTextFillColor:'azure'}}>
        <i className="fas fa-ellipsis-v"></i>
        </NavbarToggler>
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
                 backgroundColor:'rgba(0,0,0,.5)',
              }}

              >
              {

                this.props.work && this.props.work.map(wrk=>{

               if(wrk.action==='PLAY'){
                    return (
                     <DropdownItem style={{
                WebkitTextFillColor:'#fff',
                color:'#fff',
                 backgroundColor:'rgba(0,0,0,.5)'
              }}
href={wrk.link} key={wrk.id}>
                {wrk.title}
                </DropdownItem>

                    )
                  }else{
                    return true
                  }
                  


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
