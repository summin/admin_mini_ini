import React, { Component, Fragment } from 'react';
import * as b from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import navlogo from '../../../../dist/assets/images/logo-horizontal.png';
import Clock from './Clock';
import { render } from 'react-dom';
import Result from './Result'
import {text} from '../app'


const navStyle = {
    backgroundColor: '#e3f2fd',
}

const navlogoStyle = {
    height: '30px',
}

export default class Header extends Component {

    state = {
        homey: "What Homey?"
    }



    onClick() {
        this.props.setState({text: "That Homey!"})
    }

    render() {
        const returned = this.state.homey
        returned
        return (

            <Navbar expand="lg" className="header" style={navStyle}>
                <Navbar.Brand href="#home"><b.Image src={navlogo} style={navlogoStyle} /></Navbar.Brand>
                <Navbar.Brand><Clock /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">{this.state.homey}</Nav.Link>
                        <Nav.Link href="#home">{this.props.homey}</Nav.Link>
                        <Nav.Link href="#assets" onClick={this.onClick.bind(this)}>Assets</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>

                </Navbar.Collapse>

            </Navbar>
        )
    }
}
