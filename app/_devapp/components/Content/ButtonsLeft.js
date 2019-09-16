import React from 'react';
import Buttons from './Buttons'
import cuid from 'cuid'
import Spinner from 'react-bootstrap/Spinner'

export default ({...props}) => {
    let array = [];
    if (props.content)
        array.push(
            <div key={cuid()} className="d-flex ml-auto mr-auto mt-lg-0 flex-column">
                <Buttons
                    contentLoaded={props.contentLoaded}
                    content={props.content}
                    onClick={props.onClick}
                    key={cuid()}>
                </Buttons>
            </div>);
    else array.push("");
    return array;
}