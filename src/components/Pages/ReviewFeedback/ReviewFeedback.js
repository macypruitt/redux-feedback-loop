import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';
import Button from '@material-ui/core/Button';

class ReviewFeedback extends Component {
    handleClick = (event) => {
        this.props.history.push('/success');
    }

    render() {

    
        return (
            <div>
      
            <Button variant="contained" onClick={this.handleClick} >
            Default
            </Button>
               
            </div>
        )
    }
}

export default connect(mapStoreToProps)(ReviewFeedback);