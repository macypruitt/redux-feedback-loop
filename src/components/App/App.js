//modules
import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';
import mapStoreToProps from '../../modules/mapStoreToProps';
import { connect } from 'react-redux';

import './App.css';

//pages/routes
import Feeling from '../../components/Pages/Feeling/Feeling';
import Understanding from '../../components/Pages/Understanding/Understanding';
import Supported from '../../components/Pages/Supported/Supported';
import Comments from '../../components/Pages/Comments/Comments';
import ReviewFeedback from '../../components/Pages/ReviewFeedback/ReviewFeedback';
import Success from '../../components/Pages/Success/Success';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(App);