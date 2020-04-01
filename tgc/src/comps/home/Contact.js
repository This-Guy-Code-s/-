/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import axios from 'axios'
import React  from 'react';
import {Form,FormGroup,Input,Label, Button,Spinner, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components'


const Err = styled.span`
  color:red;
  -webkit-text-fill-color:red;
`

const Pass = styled.span`
  color:green;
  -webkit-text-fill-color:green;
`



const pulse = {
    float:'right'
  }

  const conBtn = {
    backgroundColor:"rgba(0,0,0,.5)",
    border:'double azure',
    fontSize:'2rem'

  }

    const conLink = {
    background:"-webkit-linear-gradient(azure,azure,blue)",
    WebkitBackgroundClip:'text',
    WebkitTextFillColor:'transparent',

  }



      const formBox = {
    backgroundColor:'rgba(0,0,0,1)',
    padding:'1%',
    borderRaduis:'10px',
    WebkitTextFillColor:'azure',
    
  }

      const formio = {
    backgroundColor:'rgba(0,0,0,.3)',
    padding:'1%',
    borderRaduis:'10px',
     WebkitTextFillColor:'azure'
  }




class Contact extends React.Component {
 constructor(props){
  super(props)
  this.state={
    modal:false,
    msg:{
      usr_name:'',
      email:'',
      message:''
    },
    errMsg:'',
    passMsg:''
  }

  this.toggle = this.toggle.bind(this)
  this.send = this.send.bind(this)
 }

 toggle(){
  this.setState({
    modal:!this.state.modal
  })
 }

 send(e){
    e.preventDefault()
    //https://thisguycodez.herokuapp.com/
    
    if(
      !this.state.msg.usr_name.match(/[A-z]/i) ||
      !this.state.msg.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ||  
      !this.state.msg.message.match(/[A-z]/i) 

      ){

      this.setState({
        errMsg:"We Cant Send This, please check for errors",
        passMsg:""
      })

      return false
    }



    axios.post('https://thisguycodez.herokuapp.com/api/admin/inbox'
      ,this.state.msg)
    .then(res=>{
      console.log(res)

        this.setState({
        passMsg:`Thank You ${res.data.newMsg.usr_name} Your Message Was Sent.`,
        errMsg:""
      })


     setTimeout(()=>{
    this.toggle()
     },2000)   

    })
    .catch(err=>{
      console.log(err)
      this.setState({
        errMsg:"server overwhelmed please wait or try again",
      passMsg:""
      })

    })

    e.target.reset()
  }
render(){

return (
    <div >
      <Button style={conBtn} onClick={this.toggle}><span style={conLink}><i className="fas fa-envelope"></i> {this.props.buttonLabel} <i className="fas fa-envelope"></i></span></Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <Err>{this.state.errMsg}</Err>
        <Pass>{this.state.passMsg}</Pass>
        <ModalHeader toggle={this.toggle} style={formBox}>
        <span style={pulse}>
        <Spinner type="grow" color="danger" />
        </span>
       </ModalHeader>
        <ModalBody  style={formBox}>
       {/*FORM*/}
        <Form style={formio} onSubmit={this.send}>
       <FormGroup>
        <Label htmlFor="name" style={{WebkitTextFillColor:'azure'}}>Name:</Label>
        <Input type="text" name="name" id="name" value={this.state.msg.usr_name} onChange={(e)=>{this.setState({msg:{...this.state.msg,usr_name:e.target.value}})}} placeholder="Name..."  style={{WebkitTextFillColor:'#000'}} required/>
      </FormGroup>
       <FormGroup>
        <Label htmlFor="email" style={{WebkitTextFillColor:'azure'}}>Email:</Label>
        <Input type="email" name="email" id="email" value={this.state.msg.email} onChange={(e)=>{this.setState({msg:{...this.state.msg,email:e.target.value}})}} placeholder="Email..."  style={{WebkitTextFillColor:'#000'}} required/>
      </FormGroup>
       <FormGroup>
        <Label htmlFor="message:" style={{WebkitTextFillColor:'azure'}}>Message</Label>
        <Input type="textarea" name="message" id="message" value={this.state.msg.message} onChange={(e)=>{this.setState({msg:{...this.state.msg,message:e.target.value}})}} placeholder="Message..."  style={{WebkitTextFillColor:'#000'}} required/>
      </FormGroup>
      <Button style={
        {
          WebkitTextFillColor:'#000',
          backgroundColor:"rgba(53,242,646.2)",
          fontWeight:"bolder"
        }}
        >Send</Button>
        </Form>
        {/*FORM*/}
        </ModalBody>
        <ModalFooter style={formBox}>
          <Button color="danger" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );


}
  
}

export default Contact;
