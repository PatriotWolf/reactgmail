import React, { Component } from 'react';
import axios from 'axios';
import { Base64 } from 'js-base64';
import { Button,Modal } from 'react-bootstrap';
class ModalMessage extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.msg=this.props.message.data.payload.parts[0].body.data
    this.state = {
      show: false
    };
  }
  getMessage(a){
    let result=""
    let obj=a.message.data.payload.parts
    obj.map(data=>{
        if(data.mimeType=="multipart/alternative")
        {  
          data.parts.map(data2=>{
            
            if(data2.mimeType=="text/plain")
              result=data2.body.data
          })
        }
        else if(data.mimeType=="text/plain")
        { 
          result=data.body.data
        }
    })
    result=Base64.decode(result)
    

    return result
  }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
   
    
    this.msg=this.getMessage(this.props)
   
    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Read
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}  bsSize="large">
          <Modal.Header closeButton>
            <Modal.Title>From: {this.props.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
              <div style={{ whiteSpace: 'pre' }}>{this.msg}</div>
             
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalMessage;

