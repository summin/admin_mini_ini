import React from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import cuid from 'cuid'
import {getContentFocus} from '../../actions'


const buttons = ({ ...props }) => {

    let group = [];
    let sections = [];

    // getting ini sections names
    Object.entries(props.content).map((i) => {
        sections.push(i[0]);
    })

    const buttonRow = (n, s) => {
        const buttons = [];
        let i, r, label;
        const generate = () => {
            (props.contentLoaded == "days") ? r = 7 : r = 2;
            for (i = 1; i < r; ++i) {
                (props.contentLoaded == "days") ? label = (i + n) : label = sections[n];

                buttons.push(
                    <Button
                        key={cuid()}
                        className="mt-1 border btn-responsive"
                        size="lg"
                        variant="light"
                        block
                        value={label}
                        onClick={(e) => props.dispatch(getContentFocus(e, props.content, props.contentLoaded))}>
                        {label}
                    </Button>)
            }
        }
        generate();
        return buttons;
    }

    let i, r, modulo;
    props.contentLoaded == "days" ? (r = 24) && (modulo = 6) : (r = sections.length) && (modulo = 1);
    for (i = 0; i < r; ++i)
        if (i % modulo == 0) {
            group.push(
                <ButtonGroup
                    key={cuid()}>
                    {buttonRow(i)}
                </ButtonGroup>);
        }

    return group;
}

export default connect()(buttons)