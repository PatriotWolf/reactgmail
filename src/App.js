import React, { Component } from 'react';
import { BrowserRouter as Router, Switch,Route, Link } from "react-router-dom";
import './App.css';

import TitleJumbo from './TitleJumbo';
import NotFoundPage from './NotFoundPage';
import Scan from './Scan';
class App extends Component {
  
    render() {
      

    return (
      <div className="App">
        <app-nav></app-nav>
        <div class="container-fluid text-center">    
          <div class="row content">
            <div class="col-sm-1 sidenav">
              
            </div>
            <div class="col-sm-10 text-left mainthing"> 
            <Router>
            <Switch>
              <Route path="/" exact component={TitleJumbo} />
              <Route path="/scan" component={Scan}/>
              <Route component={NotFoundPage} />
            </Switch>
            </Router>
            </div>
            <div class="col-sm-1 sidenav">
             
            </div>
          </div>
        </div>
        <app-footer></app-footer>
      </div>
    );
  }
}

export default App;

