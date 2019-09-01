import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';
import Button from '@material-ui/core/Button';

class Comments extends Component {
    state = {
        comments: ''
    }

    handleChange = (event) => {
        this.setState({
            comments: event.target.value
        })
        console.log(event.target.value)
    }
    
    handleClickSubmit = (event) => {
        //event.preventDefault();
        this.props.dispatch({type:'SET_COMMENTS', payload: this.state.supported});
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

export default connect(mapStoreToProps)(Comments);