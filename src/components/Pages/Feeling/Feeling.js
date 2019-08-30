import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';


class Feeling extends Component {

    
    render() {
        return (
            <div>
                <h1>Feeling!</h1>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Feeling);