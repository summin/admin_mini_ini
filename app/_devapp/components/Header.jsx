import React, { Component } from 'react';
import * as b from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import navlogo from '../../../../dist/assets/images/logo-horizontal.png';
import Alert from 'react-bootstrap/Alert'
import Clock from './Clock';
import cuid from 'cuid'

const navStyle = {
    backgroundColor: '#e3f2fd',
}

const navlogoStyle = {
    height: '30px',
}

export default class Header extends Component {

    constructor(props) {
        super(props)
        this.interval = setInterval.bind(this);
    }

    state = {
        assets_names: [],
        loaded: this.props.loaded
    }

    componentDidMount() {
        fetch(API_URL_ASSETS).then(
            (response) => {
                response.json().then((response) => {
                    let j = [];
                    for (var i in response)
                        j.push(i);
                    this.setState(this.state.assets_names = j)
                });

            });
    }

    render() {
        console.log("HEADER RENDERED");
        return (
            <Navbar expand="sm" className="header fixed-top" style={navStyle}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand href="#home"><b.Image src={navlogo} style={navlogoStyle} /></Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <NavDropdown className="mr-auto" title="Assets">
                        {this.state.assets_names.map((i) =>
                            <NavDropdown.Item onClick={this.props.handler} key={i} href="" >{i}</NavDropdown.Item>)}
                    </NavDropdown>
                    <Button key={cuid()} className="ml-auto mr-2" variant="success">Deploy</Button>
                    <Navbar.Brand className="text-monospace"><Clock /></Navbar.Brand>
                    <NavDropdown title="User Account" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Form inline className="">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
