import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';


class Understanding extends Component {
    state = {
        understanding: ''
    }

    handleChange = (event) => {
        this.setState({
            understanding: event.target.value
        })
        console.log(event.target.value)
    }
    
    handleClickSubmit = (event) => {
        //event.preventDefault();
        this.props.dispatch({type:'SET_UNDERSTANDING', payload: this.state.understanding});
        this.props.history.push('/supported');
    }

    render() {

    
        return (
            <div>
      
      <div>
            
            <h2>How well do you feel you understood the material?</h2>
            <div className="radio-buttons">
                <input onClick={this.handleChange} type="radio" name="rating" value="1"></input>1
                <input onClick={this.handleChange} type="radio" name="rating" value="2"></input>2
                <input onClick={this.handleChange} type="radio" name="rating" value="3"></input>3
                <input onClick={this.handleChange} type="radio" name="rating" value="4"></input>4
                <input onClick={this.handleChange} type="radio" name="rating" value="5"></input>5
                <button onClick ={this.handleClickSubmit} type="submit">Submit</button>
            </div>
        </div>
               
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Understanding);