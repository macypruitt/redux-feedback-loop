import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';
import Button from '@material-ui/core/Button';

class Supported extends Component {
    handleClick = (event) => {
        this.props.history.push('/comments');
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

export default connect(mapStoreToProps)(Supported);