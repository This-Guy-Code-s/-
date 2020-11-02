/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React  from 'react';
import { conBtn,conLink} from '../../util/contactStyles'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {connect} from 'react-redux'
import {changeBtnLabel,showOrNot} from '../../redux/actions'
import Form from './Form'
import './form.css'










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

    <div>
      <Button style={conBtn} onClick={this.toggle}><span><h1 style={conLink}><i className="fas fa-envelope"></i> {this.props.buttonLabel} <i className="fas fa-envelope"></i></h1></span></Button>
      <Modal isOpen={this.props.show?true:false} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle} className='con-head' ><small><span>Contact Me Via Email</span><sup><code>-ThisGuyCodez</code>&copy;</sup></small></ModalHeader>
        <ModalBody>
          <Form />
        </ModalBody>
        <ModalFooter>
          <Button style={{background:'#5791ff',backgroundColor:'#5791ff',WebkitTextFillColor:'azure',color:'azure'}} onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
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



