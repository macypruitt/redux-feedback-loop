import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';
import FeelingRadio from '../Feeling/FeelingRadio'

///rating modules
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


class Feeling extends Component {
    
    
    handleClick = (event) => {
        this.props.history.push('/understanding');
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

export default connect(mapStoreToProps)(Feeling);