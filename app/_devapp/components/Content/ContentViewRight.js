import React from 'react';
import Col from 'react-bootstrap/Col'

import myApp from 'myApp'; /** We are importing our index.php my app Vairaible */

export default ({ ...props }) => {

    const {logged, name, email} = myApp

return (
    <Col lg={2} key="1">
        <div className="ml-2 mr-2 mt-4 mt-lg-0 shadow p-3 pt-0 pb-0 mb-0 bg-white">
            <h6>Environment:</h6>
                <p className = "smallFont"> {STATIC_URL}</p>
        </div>
    </Col>
    )
}