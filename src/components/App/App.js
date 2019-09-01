//modules
import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';
import mapStoreToProps from '../../modules/mapStoreToProps';
import { connect } from 'react-redux';
import 'typeface-roboto';
import './App.css';

//pages/routes
import Feeling from '../../components/Pages/Feeling/Feeling';
import Understanding from '../../components/Pages/Understanding/Understanding';
import Supported from '../../components/Pages/Supported/Supported';
import Comments from '../../components/Pages/Comments/Comments';
import ReviewFeedback from '../../components/Pages/ReviewFeedback/ReviewFeedback';
import Success from '../../components/Pages/Success/Success';
import '../../modules/services/feedback.service'


class App extends Component {

  getFeedback
  render() {
    return (
      <div className="container">
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Router>
        <Route exact path="/" component={Feeling} />
        <Route exact path="/understanding" component={Understanding} />
        <Route exact path="/supported" component={Supported} />
        <Route exact path="/comments" component={Comments} />
        <Route exact path="/review" component={ReviewFeedback} />
        <Route exact path="/success" component={Success} />
        </Router>
      </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(App);
