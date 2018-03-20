/** dumb */

import React, { Component } from 'react';
import "./Scan.css"
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';
import PropTypes from 'prop-types';
import ModalMessage from './ModalMessage';
fontawesome.library.add(faEnvelope)
class Scan extends Component {
  componentWillMount(){
  	const products=this.getDetail()
    const profile=this.getProfile()
  	this.setState({products})
    this.setState({profile})

  }
  
  getDetail(){
  	
  	return this.props.location.state.data
  }
  getProfile(){
    
    return this.props.location.state.res
  }
  getModal(a){
    
  }
  getName(a){
    let b=a.data.payload.headers.filter(data=>{ return data.name==="From" })
    
    return b[0].value
  }
  render() {
    const total=this.state.products.messages.length
    
    return ( 
   

<div class="pro">
  <div class="card border-primary">
      <div class="row profile">
      <div class="col-md-3">
        <div class="profile-sidebar">
          {/*<!-- SIDEBAR USERPIC -->*/}
              <div class="profile-userpic">
                <img src={this.state.profile.Paa} class="img-responsive" alt="" align="middle"/>
              </div>
              {/*<!-- END SIDEBAR USERPIC -->
              <!-- SIDEBAR USER TITLE -->*/}
              <div class="profile-usertitle">
                <div class="profile-usertitle-name">
                  {this.state.profile.ig}
                </div>
                <div class="profile-usertitle-job">
                  {this.state.profile.U3}
                </div>
              </div>
          {/*<!--END SIDEBAR USER TITLE -->
          <!-- SIDEBAR BUTTONS -->*/}
              <div class="profile-userbuttons">
                    <button type="button" class="btn btn-success btn-sm">Sign-out</button>
                    <button type="button" class="btn btn-danger btn-sm">New Message</button>
              </div>
              {/*<!-- END SIDEBAR BUTTONS -->
              <!-- SIDEBAR MENU -->
              <!-- END MENU -->*/}
        </div>
      </div>
      <div class="col-md-9">
              <div class="profile-content">
                   <h2>You have {total} e-mail messages</h2>
                  <table class="table table-hover" >
                    <tbody>  
                      {this.state.products.messages.map(row=>{
                                                const msjDetail=this.getModal(row)
                                                return( 
                                                <tr>
                                                      <th scope="row" class="icon col-1"> <FontAwesomeIcon icon={faEnvelope}/> </th>
                                                      <th class="name">{this.getName(row)}</th>
                                                      <th class="col-10">{row.data.snippet}</th>
                                                      <td class="col-1 bton"><ModalMessage message={row} name={this.getName(row)}/></td>
                                             
                                                </tr>)

                      })}
                    </tbody>
                  </table>
              </div>
      </div>
    </div>
  </div>
  <br/>
  <br/>
</div>
    );
  }
}

export default Scan;