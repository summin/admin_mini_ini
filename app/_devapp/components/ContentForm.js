import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import FormGroup from './FormGroup'
import cuid from 'cuid'


const alertStyle = {
}

const buttonStyle = {
    padding: '0.4em 0em'
}

const errorHandling = (asset) => {
    try { asset }
    catch (error) {
        asset = <div>{error}</div>
    }
    finally { return asset };
}

export default class ContentForm extends Component {

    constructor(props) {
        super(props)
        this.hasError = false
    }

    static getDerivedStateFromError(error) {
        return { hasError: error };
    }

    render() {
        console.log("CONTENTFORM RENDERED");
        let entries = this.props.content;
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
                
                    entries={entries}
                    onChange={this.props.onChangeForm}
                    contentLoaded={this.props.contentLoaded} />
                    </Col>);
        }

        if (this.hasError) {
            console.log(this.hasError)
            return <Alert variant="danger">Sorry, this section can not be rendered due to the circumstances beyond your control.
                Most likely the content can to be adjusted by developers only.
            </Alert>;
        }
        return content;
    }
}   