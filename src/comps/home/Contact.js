/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React  from 'react';
import { conBtn,conLink,middle,formToats} from '../../util/contactStyles'
import { Button , Modal } from 'reactstrap';
import {connect} from 'react-redux'
import {changeBtnLabel,showOrNot} from '../../redux/actions'
import Form from './Form'

class Contact extends React.Component {
 constructor(props){
  super(props)
  this.state={
    calling:'',
    modal:true
   
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
    this.setState({
      modal:!this.state.modal
    })
  this.props.showOrNot(this.props.show)
   this.props.show?this.props.changeBtnLabel('Hide..'):this.props.changeBtnLabel('Contact Me');
}
  


  componentWillUnmount(){
    return true  
}


render(){

return (


     <div style={middle} >
      <Button style={conBtn} onClick={this.toggle}><span><h1 style={conLink}><i className="fas fa-envelope"></i> {this.props.buttonLabel} <i className="fas fa-envelope"></i></h1></span></Button>
      <Modal isOpen={this.props.show} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={this.toggle} className='modalzzzz'style={{...formToats,marginTop:'100px'}}>

          {/*FORM*/}
         <Form />
        {/*FORM*/}
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


