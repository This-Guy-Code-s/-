import React from 'react'
import axios from 'axios'
import { Err,Pass,formBtn,formio,inputVise} from '../../util/contactStyles'
import {Form,FormGroup,Input,Label, Button , FormText } from 'reactstrap';
import {name_,email_,msg_} from '../../util/contactValidations'

const labe = {WebkitTextFillColor:'#fff',fontWeight:'bolder'}
class Form_ extends React.Component{
constructor(props){
super(props)
this.state={
valOrNah1:'',valOrNah2:'',valOrNah3:'',
msg:{name:'',email:'',message:''},
errMsg:'',passMsg:''
}

this.send = this.send.bind(this)

}


send(e){
e.preventDefault()

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
axios.post(process.env.REACT_APP_sendmail
,this.state.msg)
.then(res=>{
this.setState({
passMsg:`Thank You ${this.state.name} Your Message Was Sent.`,
valOrNah1:"is-valid",valOrNah2:"is-valid",valOrNah3:"is-valid",errMsg:""
})
//reset entire form and state
setTimeout(()=>{this.props.toggle();this.setState({passMsg:"",errMsg:"",msg:{name:"",email:"",message:""},valOrNah1:"",valOrNah2:"",valOrNah3:"",})},2000)

}).catch(err=>{this.setState({errMsg:"server overwhelmed please wait or try again",passMsg:""})})

}else{this.setState({errMsg:"We Cant Send This, please check for errors",passMsg:""})}
},500)



e.target.reset()
}


render(){
return(

<Form style={formio}  onSubmit={this.send} data-testid="theForm">
<FormGroup>
<Label htmlFor="name" style={labe}></Label>
<Input className={this.state.valOrNah1} type="text" name="name" id="name" value={this.state.msg.name} onChange={(e)=>{this.setState({msg:{...this.state.msg,name:e.target.value}})}} placeholder="Name..."  style={inputVise} required/>
<FormText>What name can I refer to you as?</FormText>
</FormGroup>
<FormGroup>
<Label htmlFor="email" style={labe}></Label>
<Input className={this.state.valOrNah2}  type="email" name="email" id="email" value={this.state.msg.email} onChange={(e)=>{this.setState({msg:{...this.state.msg,email:e.target.value}})}} placeholder="Email..." style={inputVise} required/>
<FormText>You will not recieve any spam or emails period.</FormText>
</FormGroup>
<FormGroup>
<Label htmlFor="message" style={labe}></Label>
<Input className={this.state.valOrNah3} type="textarea" name="message" id="message" value={this.state.msg.message} onChange={(e)=>{this.setState({msg:{...this.state.msg,message:e.target.value}})}} placeholder="Message..." style={inputVise} required/>
<FormText><Err>{this.state.errMsg}</Err>
<Pass>{this.state.passMsg}</Pass></FormText>
</FormGroup>
<Button style={formBtn}>Send</Button>
</Form>

)
}
}



export default Form_