/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React  from 'react';
import { conBtn,conLink} from '../../util/contactStyles'
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
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
   setTimeout(()=>{document.querySelector('.App').scrollBy(0,3000)},500)
}
  


render(){

return (

   

  <>
  {
    window.innerWidth<700?(
          <Form/>
      )
    :
    (

 <div>
      <Button style={conBtn} id="toggler" onClick={this.toggle}><span><h1 style={{...conLink, marginBottom: '1rem' }}><i className="fas fa-envelope"></i> {this.props.btnL} <i className="fas fa-envelope"></i></h1></span></Button>
    <UncontrolledCollapse toggler="#toggler" className={this.props.className}>
      <Card className='cdh'>
      <small><span>Contact Me Via Email</span><sup><code>-ThisGuyCodez</code>&copy;</sup></small>
      <br />
        <CardBody>
          <Form/>
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </div>
      )
  }
  </>
 
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



