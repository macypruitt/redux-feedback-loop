import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';
import '../Comments/Comments.css'

//This form asks user to leave additional comments

class Comments extends Component {
    state = {
        comments: ''
    }

    handleChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    
    handleClickSubmit = (event) => {
        this.props.dispatch({type:'SET_COMMENTS', payload: this.state.comments});
        this.props.history.push('/review');
    }

    render() {

    
        return (
            <div>
                <h3>Any comments you want to leave?</h3>
                <textarea  className="comments-box" onChange={this.handleChange}></textarea>
                <button onClick ={this.handleClickSubmit} type="submit">Submit</button> 
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Comments);