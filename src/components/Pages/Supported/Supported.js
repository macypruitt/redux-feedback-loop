import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';


class Supported extends Component {

    
    render() {
        return (
            <div>
                <h1>Supported!</h1>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Supported);