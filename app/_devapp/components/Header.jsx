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
import { fetchAssets, fetchContent } from '../actions'

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
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand href="#home">
                    <b.Image
                        src={navlogo}
                        style={navlogoStyle} />
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
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
                        onClick={this.onClickDeploy}>
                        Deploy
                    </Button>
                    <Navbar.Brand className="text-monospace"><Clock /></Navbar.Brand>
                    <NavDropdown title="Account" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Account</NavDropdown.Item>
                        <NavDropdown.Item href="#">View</NavDropdown.Item>
                        <NavDropdown.Item href="#">User</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">App View Settings</NavDropdown.Item>
                    </NavDropdown>
                    <Form inline className="">
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2" />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default connect()(Header)

