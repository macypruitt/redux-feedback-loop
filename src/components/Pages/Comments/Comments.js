import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';


class Comments extends Component {

    
    render() {
        return (
            <div>
                <h1>Comments!</h1>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Comments);