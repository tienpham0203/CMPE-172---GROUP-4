import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Switch } from "react-router";
import './bootstrap.css';
import './app.css';
import AboutUs from './components/AboutUs.js';

import UploadToS3 from './components/UploadToS3';
class App extends Component {
  render() {
    return (
      <MyComponents></MyComponents>
    );
  }
}


class MyComponents extends Component {
  render() {
    return (
      <div className="MyCoponents">
         
                
      <Router>
        <Switch>
        <Route path="/" exact component={UploadToS3}/>
        <Route exact path="/AboutUs" component={AboutUs} />
        </Switch>
      </Router>
             
     
      </div>

    );
  }
}

export default App;

