/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import {  Toast, ToastBody, ToastHeader,Alert,Button,Badge, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';




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
      modal:false,

    }

    this.toggle = this.toggle.bind(this)

    }



   toggle(){

    this.setState({
      modal:!this.state.modal
    })

   }
    render(){
  return (
    <div style={{marginTop:'30px'}}>
      <Badge onClick={this.toggle} style={conBtn}>
    
      <sup><i className="fas fa-hand-holding-medical servio"></i></sup>
      {this.props.buttonLabel}
     
      </Badge>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>Services: Web Apps</ModalHeader>
        <ModalBody>
          
          <Alert color='secondary'>
          <i className="far fa-star">Basic<Badge color='success'>$80-$150</Badge></i>
           
           <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast>
          <ToastHeader>
            Show Case:
          </ToastHeader>
          <ToastBody>
           Digital projects, Dishes you've prepared, Articles, Gallery of pictures, YouTube videos, and/or Social media content.
          </ToastBody>
        </Toast>
      </div>
      

        <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast>
          <ToastHeader>
            Communication:
          </ToastHeader>
          <ToastBody>
            Visitors will be able to contact you through a business number and/or business email.
            Social Media links can be added if requested.Visitors can also email you directly from your website.
          </ToastBody>
        </Toast>
      </div>



       <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast>
          <ToastHeader>
            Pages: 1
          </ToastHeader>
          <ToastBody>
           This service type only consists of 1 page.
          </ToastBody>
        </Toast>
      </div>
         

          </Alert>


          <Alert color='success'>
          <i className="fas fa-star-half-alt"> Basic Multi Page<Badge color='success'>$150-$200</Badge></i>
          
           <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast>
          <ToastHeader>
            Show Case:
          </ToastHeader>
          <ToastBody>
           Digital projects, Dishes you've prepared, Articles, Gallery of pictures, YouTube videos, and/or Social media content.
          </ToastBody>
        </Toast>
      </div>


        <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast>
          <ToastHeader>
            Communication:
          </ToastHeader>
          <ToastBody>
           Visitors will be able to contact you through a business number and/or business email.
            Social Media links can be added if requested. Visitors can also email you directly from your website.
           </ToastBody>
        </Toast>
      </div>



       <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast>
          <ToastHeader>
            Pages: 1-5
          </ToastHeader>
          <ToastBody>
            With this service type, you can get up to 5 pages.
            Whether it's an ' About Me' page or Gallery, it's your choice I'll code it.
           </ToastBody>
        </Toast>
      </div>
         

          </Alert>


          <Alert color='danger'>
          <i className="fas fa-star">Full Web App(DataBase)<Badge color='success'>$300+</Badge></i>
           
           <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast>
          <ToastHeader>
            Show Case:
          </ToastHeader>
          <ToastBody>
          Digital projects,Dishes you've prepared, Articles, Gallery of pictures, YouTube videos , and/or Social media content.
          </ToastBody>
        </Toast>
      </div>


        <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast>
          <ToastHeader>
            Communication:
          </ToastHeader>
          <ToastBody>
            
            See Visitors Comments and Comment back. Join Chatrooms Or 1 on 1 messaging.
            Have a private admin version of your web app to view all content visitors send you. Visitors will be able to contact you through a business number and/or business email.
            Social Media links can be added if requested. Visitors can also email you directly from your website.
          </ToastBody>
        </Toast>
      </div>



       <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast>
          <ToastHeader>
            Pages: 1-5
          </ToastHeader>
          <ToastBody>
         With this service type, you can get up to 5 pages.
            Whether it's an ' About Me' page, Gallery, Chatroom, Support Page, etc. The choice is yours I'll code it.
          
          </ToastBody>
        </Toast>
      </div>
         

          </Alert>
          <small>extra fees may apply for extra content(contact for more detail.)</small> 
        </ModalBody>
        <ModalFooter>
         <Button color="primary" onClick={this.toggle}>Got It</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
  }
}

export default Services;
