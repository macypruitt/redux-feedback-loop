import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';
import Button from '@material-ui/core/Button';

class Understanding extends Component {
    handleClick = (event) => {
        this.props.history.push('/supported');
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

export default connect(mapStoreToProps)(Understanding);