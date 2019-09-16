import React from 'react';
import Col from 'react-bootstrap/Col'
import ContentForm from './ContentForm'

export default ({ ...props }) => {
    return (
        <Col className="mt-4 mt-lg-0" lg={7}>
            <ContentForm
                content={props.content}
                focus={props.focus}
                contentLoaded={props.contentLoaded}>
            </ContentForm>
        </Col>
    )
}