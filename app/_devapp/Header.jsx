import React, { Component, Fragment } from 'react';
import * as b from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import navlogo from '../../../dist/assets/images/logo-horizontal.png';
import { render } from 'react-dom';


const navStyle = {
    backgroundColor: '#e3f2fd',
}
const navlogoStyle = {
    height: '30px',
}



export default class Header extends Component {
    render() {
        return ( 
            <Navbar expand="lg" className="header" style={navStyle}>
                <Navbar.Brand href="#home"><b.Image src={navlogo} style={navlogoStyle}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto justify-content-right">
                        <Nav.Link href="#home">Home</Nav.Link>
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


            //<div className="container header">
            //    <nav className="navbar navbar-expand-lg navbar-light" style={navStyle}>
            //        <img src={logo} style={logoStyle} />
            //        
            //        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            //            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            //            <span className="navbar-toggler-icon"></span>
            //        </button>
            //        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            //            <ul className="nav ml-auto">
            //                <li className="nav-item">
            //                    <a className="nav-link" href="#">Config</a>
            //                </li>
            //                <li className="nav-item">
            //                    <a className="nav-link" href="#">Days</a>
            //                </li>
            //                <li className="nav-item">
            //                    <a className="nav-link" href="#">Images</a>
            //                </li>
            //                <li className="nav-item dropdown">
            //                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
            //                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            //                        Account 
            //                    </a>
            //                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            //                        <a className="dropdown-item" href="#">Action</a>
            //                        <a className="dropdown-item" href="#">Another action</a>
            //                        <div className="dropdown-divider"></div>
            //                        <a className="dropdown-item" href="#">Something else here</a>
            //                    </div>
            //                </li>
            //            </ul>
            //        </div>
            //    </nav>
            //</div>
        )
    }
}
