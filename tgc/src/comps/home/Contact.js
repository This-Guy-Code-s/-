/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import {Form,FormGroup,Input,Label, Button,Spinner, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Contact = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  const pulse = {
    float:'right'
  }

  const conBtn = {
    backgroundColor:"#700022",
    border:'solid 3px rgba(263,65,133,.5)'

  }

    const conLink = {
    background:"-webkit-linear-gradient(azure,blue)",
    WebkitBackgroundClip:'text',
    WebkitTextFillColor:'transparent',

  }



      const formBox = {
    backgroundColor:'rgba(0,0,0,1)',
    padding:'1%',
    borderRaduis:'10px',
    
  }

      const formio = {
    backgroundColor:'rgba(0,0,0,.3)',
    padding:'1%',
    borderRaduis:'10px',
     WebkitTextFillColor:'azure'
  }

  return (
    <div>
      <Button style={conBtn} onClick={toggle}><span style={conLink}><i class="fas fa-envelope"></i> {buttonLabel} <i class="fas fa-envelope"></i></span></Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} style={formBox}>
 <span style={pulse}>
        <Spinner type="grow" color="danger" />
        </span>
       </ModalHeader>
        <ModalBody  style={formBox}>
       {/*FORM*/}
        <Form style={formio}>
       <FormGroup>
        <Label htmlFor="name" style={{WebkitTextFillColor:'azure'}}>Name:</Label>
        <Input type="text" name="name" id="name" placeholder="Name..."  style={{WebkitTextFillColor:'#000'}}/>
      </FormGroup>
       <FormGroup>
        <Label htmlFor="email" style={{WebkitTextFillColor:'azure'}}>Email:</Label>
        <Input type="email" name="email" id="email" placeholder="Email..."  style={{WebkitTextFillColor:'#000'}}/>
      </FormGroup>
       <FormGroup>
        <Label htmlFor="message:" style={{WebkitTextFillColor:'azure'}}>Message</Label>
        <Input type="textarea" name="message" id="message" placeholder="Message..."  style={{WebkitTextFillColor:'#000'}}/>
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
          <Button color="danger" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Contact;
