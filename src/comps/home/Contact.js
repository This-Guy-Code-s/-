/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React  from 'react';
import { conBtn,conLink,formToats, pulse,middle,formToatsHeader,formBoxh} from '../../util/contactStyles'
import { Button ,Toast, ToastBody, ToastHeader, Modal,FormText,FormGroup,Card } from 'reactstrap';
import {connect} from 'react-redux'
import {changeBtnLabel,showOrNot} from '../../redux/actions'
import Form from './Form'
import {inputVise,Pass,Err} from '../../util/contactStyles'
import {name_,email_,msg_} from '../../util/contactValidations'
import './form.css'

import axios from 'axios'


class Contact extends React.Component {
 constructor(props){
  super(props)
  this.state={
    calling:'',
    modal:this.props.show?true:false,
 
  }
 
  this.toggle = this.toggle.bind(this)


}






componentDidMount(){
    this.props.show?this.props.changeBtnLabel('Hide..'):this.props.changeBtnLabel('Contact Me');
    
 }

 componentDidUpdate(){
    this.props.show?this.props.changeBtnLabel('Hide..'):this.props.changeBtnLabel('Contact Me');

    
 }

  toggle(){

  this.props.showOrNot(this.props.show)
   this.props.show?this.props.changeBtnLabel('Hide..'):this.props.changeBtnLabel('Contact Me');
}
  


render(){

return (
 <div style={middle}>
      <br />
      <Button style={conBtn} onClick={this.toggle}><span><h1 style={conLink}><i className="fas fa-envelope"></i> {this.props.buttonLabel} <i className="fas fa-envelope"></i></h1></span></Button>
      <br />

      <Toast isOpen={this.props.show?true:false} style={formToats}>
     
      <ToastBody style={formBoxh}>
         {/*FORM*/}
          <Form />
        {/*FORM*/}
        </ToastBody>
      </Toast>
    </div>

  

  );


}
  
}

const mapStateToProps = state =>{
return {
...state
}
}

export default connect(
mapStateToProps,
{changeBtnLabel,showOrNot}
)(Contact)




   // <div style={middle} >
   //    <br />
   //    <Button style={conBtn} onClick={this.toggle}><span><h1 style={conLink}><i className="fas fa-envelope"></i> {this.props.buttonLabel} <i className="fas fa-envelope"></i></h1></span></Button>
   //    <br />

   //    <Toast isOpen={this.props.show} style={{...formToats,marginTop:'100px'}}>
     
   //       {/*FORM*/}
   //       <Form toggle={()=>{return this.toggle()}}/>
   //      {/*FORM*/}
   //    </Toast>
   //  </div>


