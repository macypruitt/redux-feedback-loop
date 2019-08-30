import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';


class ReviewFeedback extends Component {

    
    render() {
        return (
            <div>
                <h1>ReviewFeedback!</h1>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(ReviewFeedback);