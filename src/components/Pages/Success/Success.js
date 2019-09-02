import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';

//This page indicated form successfully submitted and links to reset form

class Success extends Component {

    handleButton = () => {
        this.props.dispatch({type:'CLEAR_FEEDBACK', payload: 'clearDat'});
        this.props.history.push('/#');


    }
    render() {
        return (
            <div>
                <h1>Thank you!</h1>
                <button onClick={this.handleButton}>Leave New Feedback</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Success);