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


const Div = styled.div`




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
    backgroundColor:'#000',
    flex:'1',
    WebkitTextFillColor:'#fff',
    border:'none'

    
  }

      const formio = {
    background:'linear-gradient(to bottom right,#000 ,#111, #222, #212529)',
    borderRaduis:'10px',
     WebkitTextFillColor:'azure',
     border:'double ',
     padding:'10px'
  }



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
        <small><a href='tel:2402737952'><i className="fas fa-phone"></i> Call Instead? </a></small>
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
          WebkitTextFillColor:'#fff',
          WebkitTextStroke:'.3px #000',
          textShadow:'0 0 5px #000',
          background:"linear-gradient(to bottom right,#000,#212529)",
          fontWeight:"bolder"
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
