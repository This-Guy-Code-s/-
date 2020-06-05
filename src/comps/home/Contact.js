/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React  from 'react';
import { pulse,conBtn,conLink,middle,formToats,formToatsHeader,formBoxh} from '../../util/contactStyles'
import {Toast, ToastBody, ToastHeader, Button  } from 'reactstrap';
import {connect} from 'react-redux'
import {changeBtnLabel,showOrNot} from '../../redux/actions'
import Form from './Form'

class Contact extends React.Component {
 constructor(props){
  super(props)
  this.state={
    calling:'',
   
  }
 
  this.toggle = this.toggle.bind(this)
}

componentDidMount(){
    this.props.show?this.props.changeBtnLabel('Hide..'):this.props.changeBtnLabel('Contact Me');
    
 }

 componentDidUpdate(){
    this.props.show?this.props.changeBtnLabel('Hide..'):this.props.changeBtnLabel('Contact Me');
    
 }

 async toggle(){
  try{ this.props.showOrNot(this.props.show)}
    catch(err){throw new Error(err) }
       finally{ this.props.show?this.props.changeBtnLabel('Hide..'):this.props.changeBtnLabel('Contact Me');}
}
  

render(){

return (


   <div style={middle}>
      <br />
      <Button style={conBtn} onClick={this.toggle}><span><h1 style={conLink}><i className="fas fa-envelope"></i> {this.props.buttonLabel} <i className="fas fa-envelope"></i></h1></span></Button>
      <br />

      <Toast isOpen={this.props.show} style={formToats}>
      <ToastHeader style={formToatsHeader}>
        <a style={pulse} href='tel:2402737952' ><i className="fas fa-phone phone_"></i> Call Instead? </a><b style={{WebkitTextFillColor:'#000'}}>2402737952</b>
      
      </ToastHeader>
      <ToastBody style={formBoxh}>
         {/*FORM*/}
         <Form toggle={this.toggle}/>
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