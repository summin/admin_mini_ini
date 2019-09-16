import React, { Component } from 'react';
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import FormGroup from './FormGroup'
import cuid from 'cuid'
import { setFormContent } from '../../actions'


const alertStyle = {
}

const buttonStyle = {
    padding: '0.4em 0em'
}

class ContentForm extends Component {

    constructor(props) {
        super(props)
        this.hasError = false
    }

    setContentFormData = (value, json, contentLoaded) => {
        let entries = Object.entries(json);
        entries.map((i) => {
            if (contentLoaded == 'days') {
                entries = this.filterbyFirst(i[1], value);
            }
            else if
                (i[0] === value) {
                entries = Object.entries(i[1]);
            }
        });

        // promo in days.ini fix //
        if (value === "calendar.newsletter") {
            entries = Object.entries(json);
            entries.map((i) => {
                if (i[0] === value) {
                    entries = Object.entries(i[1]);
                }
            })
        }

        this.props.dispatch(setFormContent(entries, value))
        
        return entries;
    }

    filterbyFirst = (pairs, n) => {
        let array = [[], []];
        Object.entries(pairs).map((i) => {
            let j = (i[0].split("."));
            if (j[0] == n) {
                i[0] = j.splice(1, 4).join(".");
                array.push(i);
            }
        })
        return array;
    }


    static getDerivedStateFromError(error) {
        return { hasError: error };
    }

    render() {
        let entries;
        this.props.contentLoaded && (entries = this.setContentFormData(this.props.focus, this.props.content, this.props.contentLoaded))
        let focus = this.props.focus;
        let contentLoaded = this.props.contentLoaded;
        let content = [];
        if (!contentLoaded) {
            content.push(<h5 key={cuid()}>Welcome to ini editor!</h5>);
            content.push(<p key={cuid()}>This interface is here help you to work with your ini files without the need for external text editor and ftp client. <br></br> Please, select the ini file name from the Assets dropdown in the top navbar.<br></br><br></br>Once you have edited ini entries, press Save to save the changes in the current session.<br></br>
                Press Deploy to apply the changes to the server ini files.
            </p>)
        }
        else if (!focus) {
            content.push(
                <h5 key={cuid()}>Please, press a button to select the ini section...</h5>);
        }
        else {

            content.push(
                <Row className="mt-1" key={cuid()}>
                    <Col md={6} key={cuid()}>
                        <Alert key={cuid()} variant="primary" style={alertStyle}>section: <strong>{focus}</strong> </Alert>
                    </Col>
                    <Col md={4} key={cuid()}>
                        <Alert key={cuid()} variant="secondary" style={alertStyle}>loaded: <strong>{contentLoaded}.ini</strong></Alert>
                    </Col>
                    <Col md={2} key={cuid()}>
                        <div className="d-flex">
                            <Button type="submit" key={cuid()} style={buttonStyle} size="lg" variant="secondary" onClick={this.onClick} block>Save</Button>
                        </div>
                    </Col>
                </Row>);

            content.push(
                <Col className="overflowscroll" >
                    <FormGroup
                        contentLoaded={this.props.contentLoaded} />
                </Col>);
        }

        if (this.hasError) {
            console.log(this.hasError)
            return <Alert variant="danger">Sorry, this section can not be rendered due to the circumstances beyond your control.
                Most likely the content has to be adjusted by developers only.
            </Alert>;
        }
        return content;
    }
}

export default connect()(ContentForm)