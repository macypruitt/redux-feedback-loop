import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';
import FeelingRadio from '../Feeling/FeelingRadio'


///rating modules



class Feeling extends Component {

    state = {
        feeling: ''
    }

    handleChange = (event) => {
        this.setState({
            feeling: event.target.value
        })
        console.log(event.target.value)
    }
    
    handleClickSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({type:'SET_FEELING', payload: this.state.feeling})
        this.props.history.push('/understanding');
    }

    render() {

        
        return (
            <div className="radio-buttons">
                <div className="question-text">
                    How are you feeling today?
                </div>

                <input onClick={this.handleChange} type="radio" name="rating" value="1"></input>1
                <input onClick={this.handleChange} type="radio" name="rating" value="2"></input>2
                <input onClick={this.handleChange} type="radio" name="rating" value="3"></input>3
                <input onClick={this.handleChange} type="radio" name="rating" value="4"></input>4
                <input onClick={this.handleChange} type="radio" name="rating" value="5"></input>5
                <button type="submit">Submit</button>
                
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Feeling);