import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as b from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import navlogo from '../../../../dist/assets/images/logo-horizontal.png';
import Clock from './Clock';
import cuid from 'cuid'
import { fetchAssets, fetchContent, saveContent } from '../actions'

const navStyle = {
    backgroundColor: '#e3f2fd',
}

const navlogoStyle = {
    height: '30px',
}

class Header extends Component {

    componentDidMount() {
        this.props.dispatch(fetchAssets())
    }

    render() {
        return (
            <Navbar
                expand="sm"
                className="header fixed-top"
                style={navStyle}>
                <Navbar.Brand href="#home">
                    <b.Image
                        src={navlogo}
                        style={navlogoStyle} />
                </Navbar.Brand>

                    <NavDropdown className="mr-auto" title="Assets">
                        {this.props.assets_names && this.props.assets_names.map((i) =>
                            <NavDropdown.Item
                                onClick={(e) => this.props.dispatch(fetchContent(e))}
                                value={i}
                                key={i}
                                href="">
                                {i}
                            </NavDropdown.Item>)}
                    </NavDropdown>
                    <Button
                        key={cuid()}
                        className="ml-auto mr-2"
                        variant="success"
                        onClick={() => this.props.dispatch(saveContent())}>
                        Deploy
                    </Button>
                    <Navbar.Brand className="text-monospace"><Clock /></Navbar.Brand>

            </Navbar>
        )
    }
}

export default connect()(Header)

