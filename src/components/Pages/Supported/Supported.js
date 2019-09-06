import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';

//This form asks user to rate how supported they feel from 1-5

class Supported extends Component {
    state = {
        supported: '',
        disabled: true
    }

    handleChange = (event) => {
        this.setState({
            supported: event.target.value
        }, () => {
                if(this.state.supported) {
                this.setState({
                    disabled:false
                })
            } else {
                this.setState({
                    disabled: true
                })
            }
        });
    }
    
    handleClickSubmit = (event) => {
        this.props.dispatch({type:'SET_SUPPORTED', payload: this.state.supported});
        this.props.history.push('/comments');
    }

    render() {

    
        return (
            
            <div>
                <h2>Did you feel supported by staff?</h2>
                
                <div className="radio-buttons">
                    <input onClick={this.handleChange} type="radio" name="rating" value="1"></input>1
                    <input onClick={this.handleChange} type="radio" name="rating" value="2"></input>2
                    <input onClick={this.handleChange} type="radio" name="rating" value="3"></input>3
                    <input onClick={this.handleChange} type="radio" name="rating" value="4"></input>4
                    <input onClick={this.handleChange} type="radio" name="rating" value="5"></input>5
                    <button disabled={this.state.disabled} onClick={this.handleClickSubmit} type="submit">Submit</button>
                </div>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Supported);