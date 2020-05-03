/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import axios from 'axios'
import React  from 'react';
import {Form,Toast, ToastBody, ToastHeader,FormGroup,Input,Label, Button,Spinner , FormText } from 'reactstrap';
import { Err,Pass,pulse,conBtn,conLink,middle,formToats,formToatsHeader,formBoxh,formBtn,formio} from '../../util/contactStyles'
import {connect} from 'react-redux'
import {changeBtnLabel} from '../../redux/actions'
import {name_,email_,msg_} from '../../util/contactValidations'


class Contact extends React.Component {
 constructor(props){
  super(props)
  this.state={
    valOrNah1:'',valOrNah2:'',valOrNah3:'',
    show:false,
    msg:{name:'',email:'',message:''},
    errMsg:'',passMsg:''
  }

  this.toggle = this.toggle.bind(this)
  this.send = this.send.bind(this)
 }

 componentDidUpdate(){
    this.state.show?this.props.changeBtnLabel('Hide..'):this.props.changeBtnLabel('Contact Me');
 }

 async toggle(){
  try{ this.setState({ show:!this.state.show})}
    catch(err){throw new Error(err) }
       finally{ this.state.show?this.props.changeBtnLabel('Hide..'):this.props.changeBtnLabel('Contact Me');}
}
 

 send(e){
    e.preventDefault()
    //https://thisguycodez.herokuapp.com/api/mailer

    !name_(this.state.msg.name)?this.setState({//check name
        errMsg:"We Cant Send This, please check for errors",
        valOrNah1:"is-invalid",
        passMsg:""
      }):this.setState({valOrNah1:"is-valid"});

       !email_(this.state.msg.email)?this.setState({//check email
        errMsg:"We Cant Send This, please check for errors",
        valOrNah2:"is-invalid",
        passMsg:""
      }):this.setState({valOrNah2:"is-valid"});


       !msg_(this.state.msg.message)?this.setState({//check msg
        errMsg:"We Cant Send This, please check for errors",
        valOrNah3:"is-invalid",
        passMsg:""
      }):this.setState({valOrNah3:"is-valid"});

    setTimeout(()=>{//take a sec to let state settle then check vals
       if(this.state.valOrNah1 === 'is-valid' && this.state.valOrNah2 === 'is-valid' && this.state.valOrNah3 === 'is-valid'){
        axios.post('https://thisguycodez.herokuapp.com/api/admin/inbox'
      ,this.state.msg)
    .then(res=>{
        this.setState({
        passMsg:`Thank You ${this.state.name} Your Message Was Sent.`,
        valOrNah1:"is-valid",valOrNah2:"is-valid",valOrNah3:"is-valid",errMsg:""
      })
          //reset entire form and state
     setTimeout(()=>{this.toggle();this.setState({passMsg:"",errMsg:"",msg:{name:"",email:"",message:""},valOrNah1:"",valOrNah2:"",valOrNah3:"",})},2000)

    }).catch(err=>{this.setState({errMsg:"server overwhelmed please wait or try again",passMsg:""})})

    }else{this.setState({errMsg:"We Cant Send This, please check for errors",passMsg:""})}
},500)



      e.target.reset()
}

render(){

return (


   <div style={middle}>
      <br />
      <Button style={conBtn} onClick={this.toggle}><span style={conLink}><i className="fas fa-envelope"></i> {this.props.buttonLabel} <i className="fas fa-envelope"></i></span></Button>
      <br />

      <Toast isOpen={this.state.show} style={formToats}>
      <ToastHeader style={formToatsHeader}>
        <span style={pulse}>
     <Spinner type="grow" color="primary" />
      <small><a href='tel:2402737952'><i className="fas fa-phone phone_"></i> Call Instead? </a></small>
      </span>
      
      </ToastHeader>
      <ToastBody style={formBoxh}>
         {/*FORM*/}


          <Form style={formio}  onSubmit={this.send}>
     <FormGroup>
        <Label htmlFor="name" style={{WebkitTextFillColor:'#fff',fontWeight:'bolderd'}}>Name:</Label>
        <Input className={this.state.valOrNah1} type="text" name="name" id="name" value={this.state.msg.name} onChange={(e)=>{this.setState({msg:{...this.state.msg,name:e.target.value}})}} placeholder="Name..."  style={{WebkitTextFillColor:'#000'}} required/>
        <FormText>What name can I refer to you as?</FormText>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email" style={{WebkitTextFillColor:'#fff',fontWeight:'bolderd'}}>Email:</Label>
        <Input className={this.state.valOrNah2}  type="email" name="email" id="email" value={this.state.msg.email} onChange={(e)=>{this.setState({msg:{...this.state.msg,email:e.target.value}})}} placeholder="Email..." style={{WebkitTextFillColor:'#000'}} required/>
        <FormText>You will not recieve any spam or emails period.</FormText>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="message:" style={{WebkitTextFillColor:'#fff',fontWeight:'bolderd'}}>Message:</Label>
        <Input className={this.state.valOrNah3} type="textarea" name="message" id="message" value={this.state.msg.message} onChange={(e)=>{this.setState({msg:{...this.state.msg,message:e.target.value}})}} placeholder="Message..." style={{WebkitTextFillColor:'#000'}} required/>
        <FormText><Err>{this.state.errMsg}</Err>
        <Pass>{this.state.passMsg}</Pass></FormText>
      </FormGroup>
      <Button style={formBtn}>Send</Button>
    </Form>

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
{changeBtnLabel}
)(Contact)