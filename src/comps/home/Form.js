import React from 'react'
import axios from 'axios'
import {inputVise,Pass,Err,} from '../../util/contactStyles'
import {FormText,FormGroup,Card} from 'reactstrap'
import {name_,email_,msg_} from '../../util/contactValidations'
import {changeBtnLabel,showOrNot} from '../../redux/actions'
import {connect} from 'react-redux'
import './form.css'



class Form_ extends React.Component{
constructor(props){
super(props)
this.state={
valOrNah1:'',valOrNah2:'',valOrNah3:'',
msg:{name:'',email:'',message:''},
errMsg:'',passMsg:''
}

this.send = this.send.bind(this)
this.toInbox = this.toInbox.bind(this)
this.toggle = this.toggle.bind(this)

}


 send(){

	return new Promise((good,bad)=>{


		if(name_(this.state.msg.name) && email_(this.state.msg.email) && msg_(this.state.msg.message)){
			this.setState({//check name
passMsg:`Thank You ${this.state.name} Your Message Was Sent.`,
errMsg:"",
valOrNah1:"is-valid",
valOrNah2:"is-valid",
valOrNah3:"is-valid",
})


			return good(true)
		}else{
				this.setState({valOrNah1:"is-invalid",
valOrNah2:"is-invalid",
valOrNah3:"is-invalid",errMsg:"We Cant Send This, please check for errors",passMsg:""})
		return bad(false)
	

		}
		

	
	})


}



async toInbox(){




				return this.send().then(good=>{

return axios.post(process.env.REACT_APP_sendmail
,this.state.msg)
.then(res=>{

//reset entire form and state


}).catch(err=>{this.setState({errMsg:"server overwhelmed please wait or try again",passMsg:""})})


})
	}


  toggle(){
  this.props.showOrNot(this.props.show)
   this.props.show?this.props.changeBtnLabel('Hide..'):this.props.changeBtnLabel('Contact Me');
}



render(){

return(



<div className="d-flex justify-content-center h-100" >
		<Card className="form-card" style={{background:this.props.mode?' rgba(0,0,0,.8)':'rgba(250,250,250,.8)'}}>
			<div className="card-header form-card-header">
				<div className="d-flex justify-content-end social_icon">
					<span><a href='tel:+12402737952'><i className="fas fa-mobile-alt xxx"></i></a></span>
					<span><a href='mailto:thisguycodez@gmail.com'><i className="fab fa-google-plus-square xxx"></i></a></span>
					<span><a href='https://www.linkedin.com/in/guytonoriji'><i className="fab fa-linkedin xxx"></i></a></span>
				</div>
			</div>
			<div className="card-body">
				<form  onSubmit={(e)=>{e.preventDefault();this.toInbox();if(name_(this.state.msg.name) && email_(this.state.msg.email) && msg_(this.state.msg.message)){this.toggle()}}} data-testid="theForm">
				<FormGroup>
					<div className="form-input-group form-group">
						<div className="form-input-group-prepend">
							<span className="input-group-text" style={{WebkitTextFillColor:this.props.mode?'azure':'#000',background:this.props.mode?' rgba(0,0,0,.8)':'rgba(250,250,250,0)'}}><i className="fas fa-pen-square" ></i></span>
						</div>
						<input className={`form-control ${this.state.valOrNah1}`} type="text" name="name" id="name" value={this.state.msg.name} onChange={(e)=>{this.setState({msg:{...this.state.msg,name:e.target.value}})}} placeholder="Name..."  style={{...inputVise,WebkitTextFillColor:this.props.mode?'azure':'#000'}} required/>
						
					</div>

					<div className="form-input-group form-group">
						<div className="form-input-group-prepend">
							<span className="input-group-text" style={{WebkitTextFillColor:this.props.mode?'azure':'#000',background:this.props.mode?' rgba(0,0,0,.8)':'rgba(250,250,250,0)'}}><i className="fas fa-pen-square" ></i></span>
						</div>
						<input className={`form-control ${this.state.valOrNah2}`}  type="email" name="email" id="email" value={this.state.msg.email} onChange={(e)=>{this.setState({msg:{...this.state.msg,email:e.target.value}})}} placeholder="Email..." style={{...inputVise,WebkitTextFillColor:this.props.mode?'azure':'#000'}} required/>
						
					</div>


					<div className="form-input-group form-group">
						<div className="form-input-group-prepend">
							<span className="input-group-text" style={{WebkitTextFillColor:this.props.mode?'azure':'#000',background:this.props.mode?' rgba(0,0,0,.8)':'rgba(250,250,250,0)'}}><i className="fas fa-comment-dots" ></i></span>
						</div>
						<textarea className={`form-control ${this.state.valOrNah3}`} type="textarea" name="message" id="message" value={this.state.msg.message} onChange={(e)=>{this.setState({msg:{...this.state.msg,message:e.target.value}})}} placeholder="Message..." style={{...inputVise,WebkitTextFillColor:this.props.mode?'azure':'#000'}} required></textarea>
					</div>
					
					<div className="form-group">
						<input type="submit" value="Send" className="btn float-right login_btn form-login_btn" style={{WebkitTextFillColor:this.props.mode?'azure':'#000',background:this.props.mode?' rgba(0,0,0,.8)':'rgba(250,250,250,0)'}}/>
					</div>
					<div className="form-group">
					<span onClick={this.toggle}><i className="fas fa-eye-slash" title='hide this' style={{WebkitTextFillColor:this.props.mode?'azure':'#000',cursor:'pointer'}}></i></span>
					</div>
					</FormGroup>
				</form>
			</div>
			<div className="card-footer">
				<div className="d-flex justify-content-center form-links">
					<FormText>
					<Err>{this.state.errMsg}</Err>
					<Pass>{this.state.passMsg}</Pass>
					</FormText>
				</div>
			</div>
		</Card>
	</div>
)
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
)(Form_)







// <Form style={formio}  onSubmit={this.send} data-testid="theForm">
// <FormGroup>
// <Label htmlFor="name" style={labe}></Label>
// <Input className={this.state.valOrNah1} type="text" name="name" id="name" value={this.state.msg.name} onChange={(e)=>{this.setState({msg:{...this.state.msg,name:e.target.value}})}} placeholder="Name..."  style={inputVise} required/>
// <FormText>What name can I refer to you as?</FormText>
// </FormGroup>
// <FormGroup>
// <Label htmlFor="email" style={labe}></Label>
// <Input className={this.state.valOrNah2}  type="email" name="email" id="email" value={this.state.msg.email} onChange={(e)=>{this.setState({msg:{...this.state.msg,email:e.target.value}})}} placeholder="Email..." style={inputVise} required/>
// <FormText>You will not recieve any spam or emails period.</FormText>
// </FormGroup>
// <FormGroup>
// <Label htmlFor="message" style={labe}></Label>
// <Input className={this.state.valOrNah3} type="textarea" name="message" id="message" value={this.state.msg.message} onChange={(e)=>{this.setState({msg:{...this.state.msg,message:e.target.value}})}} placeholder="Message..." style={inputVise} required/>
// <FormText><Err>{this.state.errMsg}</Err>
// <Pass>{this.state.passMsg}</Pass></FormText>
// </FormGroup>
// <Button style={formBtn}>Send</Button>
// </Form>

