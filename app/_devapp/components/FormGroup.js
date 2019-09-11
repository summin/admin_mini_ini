import React, { Component } from 'react';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Textarea from 'react-textarea-autosize'
import cuid from 'cuid'

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

export default class FormGroup extends Component {

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
                                onChange={this.props.onChange}
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