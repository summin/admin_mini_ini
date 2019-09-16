import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Textarea from 'react-textarea-autosize'
import cuid from 'cuid'
import {pushFormValue} from '../../actions'

const textStyle = {
    width: "100%",
    padding: "0.35em",
    borderWidth: '1px',
    borderRadius: '5px',
    borderColor: '#c2d6d6',
    resize: 'none',
    overflow: 'hidden'
}

const labelStyle = {
    'overflowY': 'visible'
}

class FormGroup extends PureComponent {

    constructor(props) {
        super(props);
    }

    

    render() {
        let entries = this.props.entries;
        let formGroup = [];
        entries.map((j) => {
            if (j[0]) {
                formGroup.push(
                    <Form.Group key={cuid()} as={Row}>
                        <Form.Label
                            key={cuid()}
                            className="mr-auto word-wrap"
                            value={j[0]}
                            style={labelStyle}
                            column lg={3}>
                            {j[0]}
                        </Form.Label>
                        <Col key={cuid()}>
                            <Textarea
                                key={cuid()}
                                className="transitionForm"
                                onChange={(e) => this.props.dispatch(pushFormValue(j[0], e, this.props.focus))}
                                defaultValue={j[1]}
                                style={textStyle}
                                inputRef={tag => (this.textarea = tag)}
                                id={j[0]} />
                        </Col>
                    </Form.Group>);
            }
        })
        return formGroup;
    }
}

const mapStateToProps = state => {
    const entries = state.content.formGroupContent
    const focus = state.content.formFocus
    return { entries, focus }
}

export default connect(mapStateToProps)(FormGroup)