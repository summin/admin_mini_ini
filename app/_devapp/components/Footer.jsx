import React, { Component, Fragment } from 'react';
import Nav from 'react-bootstrap/Nav'

const navStyle = {
    backgroundColor: '#e3f2fd',
    color: 'black',
}

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( 
            <Nav style={navStyle} className="header fixed-bottom">
                <h6 className="text-monospace  mw-4 mr-auto ml-auto">{this.props.loaded}.ini Loaded</h6>
            </Nav>
        )
    }
}
