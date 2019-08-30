import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';


class Success extends Component {

    
    render() {
        return (
            <div>
                <h1>Success!</h1>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Success);