/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import axios from 'axios'
import React  from 'react';
import {Form,FormGroup,Input,Label, Button,Spinner, Modal, ModalHeader, ModalBody } from 'reactstrap';
import styled from 'styled-components'


const Err = styled.span`
  color:red;
  -webkit-text-fill-color:red;
`

const Pass = styled.span`
  color:green;
  -webkit-text-fill-color:green;
`


const Div = styled.div`




`


const pulse = {
    float:'right'
  }

  const conBtn = {
    backgroundColor:"rgba(0,0,0,.5)",
    border:'double azure',
    fontSize:'1.8rem'

  }

    const conLink = {
    background:"-webkit-linear-gradient(azure,azure,#4df7ff)",
    WebkitBackgroundClip:'text',
    WebkitTextFillColor:'transparent',

  }



      const formBox = {
    backgroundColor:'rgba(0,0,0,1)',
    padding:'1%',
    borderRaduis:'10px',
    WebkitTextFillColor:'#fff',
    
  }


   const formBoxh = {
    backgroundColor:'rgba(0,0,0,.9)',
    flex:'1',
    WebkitTextFillColor:'#fff',
    border:'none'

    
  }

      const formio = {
    background:'linear-gradient(to bottom right,#4df7ff ,#5539f3)',
     WebkitTextFillColor:'#000',
     border:'double #333 ',
     padding:'10px'
  }




class Contact extends React.Component {
 constructor(props){
  super(props)
  this.state={
    modal:false,
    msg:{
      name:'',
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
    //https://thisguycodez.herokuapp.com/api/mailer
    
    if(
      !this.state.msg.name.match(/[A-z]/i) ||
      !this.state.msg.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ||  
      !this.state.msg.message.match(/[A-z]/i) 

      ){

      this.setState({
        errMsg:"We Cant Send This, please check for errors",
        passMsg:""
      })

      return false
    }



    axios.post('https://thisguycodez.herokuapp.com/api/mailer'
      ,this.state.msg)
    .then(res=>{
      console.log(res)

        this.setState({
        passMsg:`Thank You ${this.state.name} Your Message Was Sent.`,
        errMsg:""
      })


     setTimeout(()=>{
    this.toggle()
     this.setState({
        passMsg:"",
        errMsg:""
      })
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
    <Div>
      <Button style={conBtn} onClick={this.toggle}><span style={conLink}><i className="fas fa-envelope"></i> {this.props.buttonLabel} <i className="fas fa-envelope"></i></span></Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <Err>{this.state.errMsg}</Err>
        <Pass>{this.state.passMsg}</Pass>
        <ModalHeader toggle={this.toggle} style={formBoxh}>
        <span style={pulse}>
        <Spinner type="grow" color="primary" />
        <small><a href='tel:2402737952'><i className="fas fa-phone phone_"></i> Call Instead? </a></small>
        </span>
       </ModalHeader>
        <ModalBody  style={formBox}>
       {/*FORM*/}
        <Form style={formio} onSubmit={this.send}>
       <FormGroup>
        <Label htmlFor="name" style={{WebkitTextFillColor:'#000',fontWeight:'bolderd'}}>Name:</Label>
        <Input type="text" name="name" id="name" value={this.state.msg.name} onChange={(e)=>{this.setState({msg:{...this.state.msg,name:e.target.value}})}} placeholder="Name..."  style={{WebkitTextFillColor:'#000'}} required/>
      </FormGroup>
       <FormGroup>
        <Label htmlFor="email" style={{WebkitTextFillColor:'#000',fontWeight:'bolderd'}}>Email:</Label>
        <Input type="email" name="email" id="email" value={this.state.msg.email} onChange={(e)=>{this.setState({msg:{...this.state.msg,email:e.target.value}})}} placeholder="Email..."  style={{WebkitTextFillColor:'#000'}} required/>
      </FormGroup>
       <FormGroup>
        <Label htmlFor="message:" style={{WebkitTextFillColor:'#000',fontWeight:'bolderd'}}>Message</Label>
        <Input type="textarea" name="message" id="message" value={this.state.msg.message} onChange={(e)=>{this.setState({msg:{...this.state.msg,message:e.target.value}})}} placeholder="Message..."  style={{WebkitTextFillColor:'#000'}} required/>
      </FormGroup>
      <Button style={
        {
          WebkitTextFillColor:'#fff',
          WebkitTextStroke:'.3px #000',
          textShadow:'0 0 5px #000',
          backgroundColor:"rgba(0,0,0,.5)",
          fontWeight:"bolder",
          border:'double #000',
          boxShadow:'0 0 5px #000',
        }}
        >Send</Button>
        </Form>
        {/*FORM*/}
        </ModalBody>
       
      </Modal>
    </Div>
  );


}
  
}

export default Contact;
