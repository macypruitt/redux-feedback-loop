import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';
import { postFeedback } from '../../../modules/services/feedback.service';

//This page shows the user their completed feedback form before submitting

class ReviewFeedback extends Component {
    handleClick = (event) => {
        postFeedback(this.props.store.allFeedbackReducer);
        this.props.history.push('/success');
    }

    render() {

        const feelingRating = this.props.store.allFeedbackReducer.feeling;
        const understandingRating = this.props.store.allFeedbackReducer.understanding;
        const supportedRating = this.props.store.allFeedbackReducer.supported;
        const comments = this.props.store.allFeedbackReducer.comments;
        
        return (
            <div>
                <h2>Please review your feedback before submitting:</h2>
                <h4>How are you feeling today?</h4>
                {feelingRating}

                <h4>How well do you feel you understood the material??</h4>
                {understandingRating}

                <h4>Did you feel supported by staff?</h4>
                {supportedRating}

                <h4>Any comments you want to leave?</h4>
                {comments}
                
                <p><button onClick={this.handleClick}>Submit</button> </p>

               
            </div>
        )
    }
}

export default connect(mapStoreToProps)(ReviewFeedback);