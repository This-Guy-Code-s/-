/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import {  Toast, ToastBody, ToastHeader,Alert,Badge } from 'reactstrap';
import {connect} from 'react-redux'
import {changeBtnLabel_} from '../../redux/actions'




  const conBtn = {
    backgroundColor:"rgba(0,0,0,0)",
    fontSize:'1.8rem',
    WebkitTextFillColor:'#4df7ff',
    color:'#4df7ff',
    textShadow:'0 0 5px #5539f3',
    cursor:'pointer'
  }




class Services extends React.Component{
  constructor(props){
    super(props)
    this.state={
      show:false,

    }

    this.toggle = this.toggle.bind(this)

    }

       componentDidUpdate(){
    this.state.show?this.props.changeBtnLabel_('Hide..'):this.props.changeBtnLabel_('My Services');
 }





 async toggle(){
          try{
         this.setState({
        show:!this.state.show
           })

          }
        catch(err){
          throw new Error(err)
        }
        finally{
            this.state.show?this.props.changeBtnLabel_('Hide..'):this.props.changeBtnLabel_('My Services');
    }
        }
 





    render(){
  return (
    <div className="serviceHolder">
      <br />
       <Badge onClick={this.toggle} style={conBtn}>
    
      <sup><i className="fas fa-hand-holding-medical servio"></i></sup>
      {this.props.buttonLabel}
     
      </Badge>
      <br />
      <Toast isOpen={this.state.show} className="serviceToatsHolder">
        <ToastHeader toggle={this.toggle}>Services: Web Apps</ToastHeader>
        <ToastBody>

          <Alert color='secondary' className="servicesFlow">
          <i className="far fa-star">Basic<br /><Badge color='success'>$80-$150</Badge></i>
           
           <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast className="toatsBlock">
          <ToastHeader>
            Show Case:
          </ToastHeader>
          <ToastBody className="toatsText">
           Digital projects, Dishes you've prepared, Articles, Gallery of pictures, YouTube videos, and/or Social media content.
          </ToastBody>
        </Toast>
      </div>
      

        <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast className="toatsBlock">
          <ToastHeader>
            Communication:
          </ToastHeader>
          <ToastBody className="toatsText">
            Visitors will be able to contact you through a business number and/or business email.
            Social Media links can be added if requested.Visitors can also email you directly from your website.
          </ToastBody>
        </Toast>
      </div>



       <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast className="toatsBlock">
          <ToastHeader>
            Pages: 1
          </ToastHeader>
          <ToastBody className="toatsText">
           This service type only consists of 1 page.
          </ToastBody>
        </Toast>
      </div>
         

          </Alert>


          <Alert color='success' className="servicesFlow">
          <i className="fas fa-star-half-alt"> Basic Multi Page<br /><Badge color='success'>$150-$200</Badge></i>
          
           <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast className="toatsBlock">
          <ToastHeader>
            Show Case:
          </ToastHeader>
          <ToastBody className="toatsText">
           Digital projects, Dishes you've prepared, Articles, Gallery of pictures, YouTube videos, and/or Social media content.
          </ToastBody>
        </Toast>
      </div>


        <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast className="toatsBlock">
          <ToastHeader>
            Communication:
          </ToastHeader>
          <ToastBody className="toatsText">
           Visitors will be able to contact you through a business number and/or business email.
            Social Media links can be added if requested. Visitors can also email you directly from your website.
           </ToastBody>
        </Toast>
      </div>



       <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast className="toatsBlock">
          <ToastHeader>
            Pages: 1-5
          </ToastHeader>
          <ToastBody className="toatsText">
            With this service type, you can get up to 5 pages.
            Whether it's an ' About Me' page or Gallery, it's your choice I'll code it.
           </ToastBody>
        </Toast>
      </div>
         

          </Alert>


          <Alert color='danger' className="servicesFlow">
          <i className="fas fa-star">Full Web App(DataBase)<br /><Badge color='success'>$300+</Badge></i>
           
           <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast className="toatsBlock">
          <ToastHeader>
            Show Case:
          </ToastHeader>
          <ToastBody className="toatsText">
          Digital projects,Dishes you've prepared, Articles, Gallery of pictures, YouTube videos , and/or Social media content.
          </ToastBody>
        </Toast>
      </div>


        <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast className="toatsBlock">
          <ToastHeader>
            Communication:
          </ToastHeader>
          <ToastBody className="toatsText">
            
             Visitors can leave Comments, contact you through a business number and/or email you directly from your website, etc.
            You can have a private admin version of your web app to view/update all content.If you have an Ecommerce, you will recieve a copy of every transaction.
          </ToastBody>
        </Toast>
      </div>



       <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast className="toatsBlock">
          <ToastHeader>
            Pages: 1-5
          </ToastHeader>
          <ToastBody className="toatsText">
         With this service type, you can get up to 5 pages.
            Whether it's an ' About Me' page, Gallery, Chatroom, Support Page, Ecommerce etc. The choice is yours I'll code it.
          
          </ToastBody>
        </Toast>
      </div>
         

          </Alert>
          <small>extra fees may apply for extra content(contact for more detail.)</small> 
        
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
{changeBtnLabel_}
)(Services)