import React, { Component } from 'react';
import './App.css';
import { Button,Jumbotron } from 'react-bootstrap';
import {GoogleLogin} from 'react-google-login';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
class TitleJumbo extends Component {
   responseGoogle = (response) => {
     let res=response
    console.log(response.getAuthResponse());
    axios.post('https://iimailbot.azurewebsites.net/mail',{data:response.getAuthResponse()})
    .then(response => {console.log(response.data);this.props.history.push({
  pathname: '/scan',
  state: { fromDashboard: true, data:response.data,res:res.getBasicProfile() }
})})
  }

  render() {
    return (
      <Jumbotron>
            <br/><br/>
            <h1>Imagineering Institute's Email Robot</h1> 

            <p>We specialize in giving birth of super smart ChatBot</p> 
                <GoogleLogin
                  clientId="51999394698-khgqvphvtjoig6qmmsi0bm9gnb41n14h.apps.googleusercontent.com"
                  scope=
    'profile https://mail.google.com/ https://www.googleapis.com/auth/plus.me'
                  buttonText="Login"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
                />
            <form>
              <div className="input-group">
                  
              </div>
            </form>
          </Jumbotron>
    );
  }
}

export default TitleJumbo;

