import React from 'react'
import axios from 'axios'
import {Pass,Err,xxx} from '../../util/contactStyles'
import {FormText,FormGroup} from 'reactstrap'
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

this.toInbox = this.toInbox.bind(this)
this.toggle = this.toggle.bind(this)

}





 toInbox(){


return axios.post(process.env.REACT_APP_sendmail
,this.state.msg)
.then(res=>{

 this.setState({passMsg:res.data})


 setTimeout(()=>{
 	return this.toggle()
 },3000)
}).catch(err=>{this.setState({errMsg:"server overwhelmed please wait or try again",passMsg:""})})


	}


  toggle(e){
if (this._isMounted){

this.setState({
valOrNah1:'',valOrNah2:'',valOrNah3:'',
msg:{name:'',email:'',message:''},
errMsg:'',passMsg:''
})


this.props.showOrNot(this.props.show)
   

this.props.show?this.props.changeBtnLabel('Hide..'):this.props.changeBtnLabel('Contact Me');

if(document.querySelector('#toggler'))
document.querySelector('#toggler').click()
 }
}




componentWillUnmount(){
	   this._isMounted = false;
}

render(){

return(


	    <div className="registration-form">
        <form  onSubmit={(e)=>{e.preventDefault();this.toInbox();return e.target.reset()}} data-testid="theForm" className="primary-neumorphx">
            <div className="me-icon">
                <span><img src={this.props.me} width='100%' height='100%' alt='thisguycodez.com' className="mexform"/></span>
            </div>


            <FormGroup>
					<div className="form-input-group form-group">
						<div className="form-input-group-prepend">
							<span className="input-group-text" ><i className="fas fa-pen-square" ></i></span>
						</div>
						<input className={`form-control ${this.state.valOrNah1}`} type="text" name="name" id="name"  onChange={(e)=>{this.setState({msg:{...this.state.msg,name:e.target.value}})}} placeholder="Name..."  minLength={3} required/>
						
					</div>

					<div className="form-input-group form-group">
						<div className="form-input-group-prepend">
							<span className="input-group-text" ><i className="fas fa-pen-square" ></i></span>
						</div>
						<input className={`form-control ${this.state.valOrNah2}`}  type="email" name="email" id="email"  onChange={(e)=>{this.setState({msg:{...this.state.msg,email:e.target.value}})}} placeholder="Email..." minLength={8} required/>
						
					</div>


					<div className="form-input-group form-group">
						<div className="form-input-group-prepend">
							<span className="input-group-text" ><i className="fas fa-comment-dots" ></i></span>
						</div>
						<textarea className={`form-control ${this.state.valOrNah3}`} type="textarea" name="message" id="message"  onChange={(e)=>{this.setState({msg:{...this.state.msg,message:e.target.value}})}} placeholder="Message..." minLength={10} required></textarea>
					</div>
					
					<div className="form-group">
						<input type="submit" value="Send" className="btn btn-block send2me" />
					</div>
					<div className="card-footer">
				<div className="d-flex justify-content-center form-links">
					<FormText>
					<Err>{this.state.errMsg}</Err>
					<Pass>{this.state.passMsg}</Pass>
					</FormText>
				</div>
			</div>
					</FormGroup>


        </form>
      
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
