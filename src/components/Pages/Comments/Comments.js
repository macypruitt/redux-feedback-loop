import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';
import Button from '@material-ui/core/Button';
import '../Comments/Comments.css'

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
        this.props.dispatch({type:'SET_COMMENTS', payload: this.state.comments});
        this.props.history.push('/review');
    }

    render() {

    
        return (
            <div>
                <h3>Please leave any additional comments:</h3>
                <input  className="comments-box" onChange={this.handleChange} type="text" name="rating"></input>
                <button onClick ={this.handleClickSubmit} type="submit">Submit</button>
                    
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Comments);